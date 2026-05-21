// =====================================================
// SHARD HN REPLICA SET INITIALIZATION
// =====================================================

rs.initiate({
  _id: "hnRS",

  members: [
    {
      _id: 0,
      host: "shard-hn-primary:27017"
    },
    {
      _id: 1,
      host: "shard-hn-assistant:27017"
    },
    {
      _id: 2,
      host: "shard-hn-secretary:27017"
    }
  ]
})


// =====================================================
// INITIAL STATUS LOGGING
// =====================================================

print("🚀 SHARD-HN SET INIT DONE")
print("⏳ WAITING PRIMARY...")


while (!db.hello().isWritablePrimary) {
  sleep(2)
}

print("✅ SHARD-HN INIT DONE")


// =====================================================
// SWITCH TO ADMIN DATABASE
// =====================================================

db = db.getSiblingDB("admin")


// =====================================================
// CREATE ROOT ADMIN USER
// =====================================================

db.createUser({
  user: process.env.MONGO_ADMIN_SHARD_HN,
  pwd: process.env.MONGO_PASSWORD_SHARD_HN,

  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
