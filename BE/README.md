# 🚀 NestJS REST API - Docker Enterprise Backend

![Docker](https://img.shields.io/badge/Docker-Enterprise-blue)
![NestJS](https://img.shields.io/badge/NestJS-Backend-red)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-brightgreen)
![API](https://img.shields.io/badge/Type-REST%20API-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

### - Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
### - Created: May 15, 2026

---

## 📌 Overview

This is a **RESTful API backend system** built with enterprise architecture using Docker.

It provides:

- 🔐 Authentication API (Register / Login)
- 📄 Swagger API Documentation
- 🗄️ MongoDB database integration
- 🧩 Mongo Express for database management
- 🌐 Nginx reverse proxy
- 🐳 Fully containerized environment

---

## ⚠️ Note

This project is **backend API only** (no frontend UI), designed for:

- Mobile apps
- Frontend frameworks (React / Vue / Angular)
- Microservices architecture
- API integrations

---

## 🚀 VS Code Extensions (Recommended Setup)

For stack: NestJS + Node.js + JavaScript + Docker + MongoDB + Nginx + Swagger

### 🏷️ Editor Control
- ⚡ JavaScript (ES6) code snippets
- ⚡ ESLint
- ⚡ WSL
- 🎨 Prettier - Code formatter
- 🏷️ Live Server (Five Server)
- 🎨 vscode-icons
- ❗ Error Lens

### 🐳 Docker / DevOps
- 🐳 Docker Entension Pack
- 📦 Docker Explorer
- 🧾 YAML

### ⚙️ Git / Version Control
- 🔥 GitLens
- 🌳 Git Graph

### 🎯 Logic Layer
- NestJS Files
- MongoDB for VS Code

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

### 0. Remove old containers

```bash
docker compose down -v --remove-orphans
```

### 1. Fix permissions

```bash
sudo chown 1000:1000 -R . && sudo chmod 777 -R .
```

### 2. Grant execute permission

```bash
find . -type f -name "*.sh" -exec chmod +x {} \;
```

### 3. Build & start cluster

```bash
docker compose up -d --build --force-recreate
```
