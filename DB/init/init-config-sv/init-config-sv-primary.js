rs.initiate({
  _id: "cfgRS",
  configsvr: true,
  members: [
    { _id: 0, host: "config-sv-primary:27017" },
    { _id: 1, host: "config-sv-assistant:27017" },
    { _id: 2, host: "config-sv-secretary:27017" }
  ]
})

print("⏳ WAITING PRIMARY...")

while (!db.hello().isWritablePrimary) {
  sleep(2)
}

print("✅ CONFIG-SV INIT DONE")

// switch admin DB
db = db.getSiblingDB("admin")

// create root user
db.createUser({
  user: process.env.MONGO_ADMIN_CONFIG_SV,
  pwd: process.env.MONGO_PASSWORD_CONFIG_SV,
  roles: [
    { role: "root", db: "admin" }
  ]
})

print("🔐 ADMIN USER CREATED SUCCESSFULLY")
