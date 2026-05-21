# 🚀 Backend API System (NestJS + MongoDB + Docker)

![NestJS](https://img.shields.io/badge/Backend-NestJS-red)
![Docker](https://img.shields.io/badge/Deploy-Docker-blue)
![Swagger](https://img.shields.io/badge/API-Swagger-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

- Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
- Created: May 21, 2026

---

# 📌 Overview

Backend REST API system using:

- 🚀 NestJS framework
- 🍃 MongoDB integration
- 🔐 JWT Authentication
- 📄 Swagger API documentation
- 🐳 Docker containerization

---

# 🧱 Tech Stack

## ⚙️ Backend
- NestJS
- REST API
- JWT Authentication
- Swagger

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
