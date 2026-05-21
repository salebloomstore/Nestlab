# 🚀 Full Stack System (Nuxt + NestJS + MongoDB + Docker)

![Nuxt](https://img.shields.io/badge/Frontend-Nuxt-success)
![NestJS](https://img.shields.io/badge/Backend-NestJS-red)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Mongo Express](https://img.shields.io/badge/Admin-Mongo--Express-orange)
![Docker](https://img.shields.io/badge/Deploy-Docker-blue)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

- Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
- Created: May 15, 2026

---

# 📌 Overview

Full stack system using:

- ⚡ NuxtJS frontend
- 🚀 NestJS backend
- 🍃 MongoDB database
- 📊 Mongo Express management
- 🐳 Docker containerization
- 🌐 Nginx reverse proxy

---

# 🧱 Tech Stack

## 🎨 Frontend
- NuxtJS
- HTML5 / CSS3 / JavaScript
- Bootstrap 5

## ⚙️ Backend
- NestJS REST API
- JWT Authentication
- Swagger API

## 🗄️ Database
- MongoDB
- Mongo Express

## 🐳 DevOps
- Docker & Docker Compose
- Nginx Reverse Proxy

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
docker compose -f example_DB/docker-compose.yml down -v --remove-orphans
```
```bash
docker compose -f example_BE/docker-compose.yml down -v --remove-orphans
```
```bash
docker compose -f example_FE/docker-compose.yml down -v --remove-orphans
```

### 2. Build & start cluster

```bash
cp example_DB/.env_example example_DB/.env && docker compose -f example_DB/docker-compose.yml up -d --build --force-recreate
```

```bash
cp example_BE/.env_example example_BE/.env && docker compose -f example_BE/docker-compose.yml up -d --build --force-recreate
```

```bash
cp example_FE/.env_example example_FE/.env && docker compose -f example_FE/docker-compose.yml up -d --build --force-recreate
```
