rs.initiate({
  _id: "sgRS",
  members: [
    { _id: 0, host: "shard-sg-primary:27017" },
    { _id: 1, host: "shard-sg-assistant:27017" },
    { _id: 2, host: "shard-sg-secretary:27017" }
  ]
})

print("🚀 SHARD-SG SET INIT DONE");
print("⏳ WAITING PRIMARY...")

while (!db.hello().isWritablePrimary) {
  sleep(2)
}

print("✅ SHARD-SG INIT DONE")

// switch admin DB
db = db.getSiblingDB("admin")

// create root user
db.createUser({
  user: process.env.MONGO_ADMIN_SHARD_SG,
  pwd: process.env.MONGO_PASSWORD_SHARD_SG,
  roles: [
    { role: "root", db: "admin" }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
