rs.initiate({
  _id: "hnRS",
  members: [
    { _id: 0, host: "shard-hn-primary:27017" },
    { _id: 1, host: "shard-hn-assistant:27017" },
    { _id: 2, host: "shard-hn-secretary:27017" }
  ]
})

print("🚀 SHARD-HN SET INIT DONE");
print("⏳ WAITING PRIMARY...")

while (!db.hello().isWritablePrimary) {
  sleep(2)
}

print("✅ SHARD-HN INIT DONE")

// switch admin DB
db = db.getSiblingDB("admin")

// create root user
db.createUser({
  user: process.env.MONGO_ADMIN_SHARD_HN,
  pwd: process.env.MONGO_PASSWORD_SHARD_HN,
  roles: [
    { role: "root", db: "admin" }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
