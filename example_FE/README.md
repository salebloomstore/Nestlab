# 🎨 Frontend System (NuxtJS + Docker + Nginx)

![Nuxt](https://img.shields.io/badge/Frontend-Nuxt-success)
![Docker](https://img.shields.io/badge/Deploy-Docker-blue)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

- Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
- Created: May 21, 2026

---

# 📌 Overview

Frontend system using:

- ⚡ NuxtJS framework
- 🎨 HTML5 / CSS3 / JavaScript
- 🌐 Nginx reverse proxy
- 🐳 Docker containerization

---

# 🧱 Tech Stack

## 🎨 Frontend
- NuxtJS
- HTML5
- CSS3
- JavaScript

## 🐳 DevOps
- Docker
- Docker Compose
- Nginx

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
