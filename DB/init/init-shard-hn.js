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
  sleep(10)
}

print("✅ SHARD-DN INIT DONE")

// switch admin DB
db = db.getSiblingDB("admin")

// create root user
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [
    { role: "root", db: "admin" }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
