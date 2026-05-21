// =====================================================
// ADD SHARDS TO MONGODB CLUSTER
// =====================================================


// =========================
// DA NANG SHARD
// =========================

sh.addShard(
  "dnRS/shard-dn-primary:27017,shard-dn-assistant:27017,shard-dn-secretary:27017"
)


// =========================
// HA NOI SHARD
// =========================

sh.addShard(
  "hnRS/shard-hn-primary:27017,shard-hn-assistant:27017,shard-hn-secretary:27017"
)


// =========================
// HO CHI MINH SHARD
// =========================

sh.addShard(
  "sgRS/shard-sg-primary:27017,shard-sg-assistant:27017,shard-sg-secretary:27017"
)


// =====================================================
// ENABLE SHARDING FOR DATABASE
// =====================================================

db = db.getSiblingDB("test")

sh.enableSharding("test")


// =====================================================
// CREATE COLLECTION
// =====================================================

db.createCollection("examples")


// =====================================================
// SHARD COLLECTION CONFIGURATION
// =====================================================

sh.shardCollection(
  "test.examples",
  {
    _id: "hashed"
  }
)


// =====================================================
// START INSERTING DATA
// =====================================================

print("START INSERT DATA")

let bulk = []


// =====================================================
// GENERATE SAMPLE DATA
// =====================================================

for (let i = 0; i < 10; i++) {

  bulk.push({
    username: "user_" + i,
    email: "user_" + i + "@gmail.com",
    score: Math.floor(Math.random() * 1000),
    createdAt: new Date()
  })

}


// =====================================================
// INSERT DATA INTO COLLECTION
// =====================================================

if (bulk.length > 0) {
  db.examples.insertMany(bulk)
}


// =====================================================
// FINISH
// =====================================================

print("DONE")
