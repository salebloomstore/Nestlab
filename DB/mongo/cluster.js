sh.addShard("dnRS/shard-dn-primary:27017,shard-dn-assistant:27017,shard-dn-secretary:27017")

sh.addShard("hnRS/shard-hn-primary:27017,shard-hn-assistant:27017,shard-hn-secretary:27017")

sh.addShard("sgRS/shard-sg-primary:27017,shard-sg-assistant:27017,shard-sg-secretary:27017")

db = db.getSiblingDB("test")

sh.enableSharding("test")

db.createCollection("examples")

sh.shardCollection(
  "test.examples",
  { _id: "hashed" }
)

print("START INSERT DATA")

let bulk = []

for (let i = 0; i < 10; i++) {

  bulk.push({
    username: "user_" + i,
    email: "user_" + i + "@gmail.com",
    score: Math.floor(Math.random() * 1000),
    createdAt: new Date()
  })

}

if (bulk.length > 0) {
  db.examples.insertMany(bulk)
}

print("DONE")
