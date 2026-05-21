// =====================================================
// SHARD DN REPLICA SET INITIALIZATION
// =====================================================

rs.initiate({
  _id: "dnRS",

  members: [
    {
      _id: 0,
      host: "shard-dn-primary:27017"
    },
    {
      _id: 1,
      host: "shard-dn-assistant:27017"
    },
    {
      _id: 2,
      host: "shard-dn-secretary:27017"
    }
  ]
})


// =====================================================
// INITIAL STATUS
// =====================================================

print("🚀 SHARD-DN SET INIT DONE")
print("⏳ WAITING PRIMARY...")


while (!db.hello().isWritablePrimary) {
  sleep(2)
}

print("✅ SHARD-DN INIT DONE")


// =====================================================
// SWITCH TO ADMIN DATABASE
// =====================================================

db = db.getSiblingDB("admin")


// =====================================================
// CREATE ROOT ADMIN USER
// =====================================================

db.createUser({
  user: process.env.MONGO_ADMIN_SHARD_DN,
  pwd: process.env.MONGO_PASSWORD_SHARD_DN,

  roles: [
    {
      role: "root",
      db: "admin"
    }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
