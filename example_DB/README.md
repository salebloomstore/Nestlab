# 🚀 Distributed MongoDB Cluster with Docker (MongoDB + Mongo Express)

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Docker](https://img.shields.io/badge/Container-Docker-blue)
![Mongo Express](https://img.shields.io/badge/UI-Mongo_Express-orange)
![Cluster](https://img.shields.io/badge/Architecture-Sharding-red)

---

## 👨‍💻 Author

### - Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
### - Created: May 15, 2026

---

## ⚙️ Build Instructions

### 0. Create the shared Docker network if it does not already exist

```bash
docker network create nest-cluster
```

### 0. Copy `.env_example` to `.env` and configure it for project

```bash
cp .env_example .env
```

### 0. Fix permissions

```bash
sudo chown 1000:1000 -R . && sudo chmod 777 -R .
```

### 0. Grant execute permission

```bash
find . -type f -name "*.sh" -exec chmod +x {} \;
```

### 1. Remove old containers

```bash
docker compose down -v --remove-orphans
```

### 2. Build & start cluster

```bash
docker compose up -d --build --force-recreate
```

---

## 🌐 Services

| Service | Address |
|---|---|
| Mongo Express | http://localhost:8081 |
| Mongo Router | http://localhost:27017 |

---

## 🔑 MongoDB Login

```bash
docker exec -it <container-name> mongosh -u <admin> -p <password> --authenticationDatabase admin
```

---

## 🧪 Useful Commands

### Check Replica Set

```javascript
rs.status()
```

### Check Sharding

```javascript
sh.status()
```

---

## 🛡️ Security

- Keyfile Authentication
- Replica Set Authentication
- Admin Authentication
- Docker Internal Network
