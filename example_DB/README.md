# 🍃 MongoDB Cluster System (MongoDB + Mongo Express + Docker)

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Mongo Express](https://img.shields.io/badge/Admin-Mongo--Express-orange)
![Docker](https://img.shields.io/badge/Deploy-Docker-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

- Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
- Created: May 21, 2026

---

# 📌 Overview

MongoDB cluster system using:

- 🍃 MongoDB Replica Set
- 📊 Mongo Express management
- 🐳 Docker containerization
- 🌐 Mongo Router (mongos)

---

# 🧱 Tech Stack

## 🗄️ Database
- MongoDB
- Mongo Express
- Replica Set
- Sharding Cluster

## 🐳 DevOps
- Docker
- Docker Compose

---

# 🚀 Deployment

### 0. Create the shared Docker network if it does not already exist

```bash
docker network create nest-cluster
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

#### Please configure .env_example before running
```bash
cp .env_example .env && docker compose up -d --build --force-recreate
```
