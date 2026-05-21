# 🚀 Full Stack Enterprise System (Frontend + Backend + Docker)

![Docker](https://img.shields.io/badge/Docker-Enterprise-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-orange)
![Backend](https://img.shields.io/badge/Backend-NestJS-red)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![jQuery](https://img.shields.io/badge/jQuery-AJAX-blue)
![OpenLayers](https://img.shields.io/badge/OpenLayers-GIS-green)
![TinyMCE](https://img.shields.io/badge/TinyMCE-Editor-red)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-brightgreen)
![API](https://img.shields.io/badge/Type-REST%20API-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

### - Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
### - Created: May 15, 2026

---

# 📌 Overview

This is a **full stack enterprise system** built using Docker architecture.

It includes:

## 🖥️ Frontend
- HTML5 / CSS3 / Bootstrap 5 UI
- jQuery AJAX communication
- OpenLayers GIS mapping
- TinyMCE rich text editor
- Static hosting via Nginx

## ⚙️ Backend
- NestJS REST API
- Authentication (Register / Login)
- MongoDB database integration
- Swagger API documentation
- Mongo Express admin tool

## 🌐 Infrastructure
- Nginx reverse proxy
- Docker containerization
- Multi-service orchestration (frontend + backend + database)

---

# ⚠️ System Architecture

This project is designed for:

- 🧩 Microservices architecture
- 📱 Mobile + Web API integration
- 🧠 GIS + CMS systems
- 🏢 Enterprise internal systems

---

# 🧱 Tech Stack

## 🏷️ Editor Control
- ⚡ JavaScript (ES6) code snippets
- ⚡ ESLint
- ⚡ WSL
- 🎨 Prettier - Code formatter
- 🏷️ Live Server (Five Server)
- 🎨 vscode-icons
- ❗ Error Lens

## 🐳 Docker / DevOps
- 🐳 Docker Entension Pack
- 📦 Docker Explorer
- 🧾 YAML

## ⚙️ Git / Version Control
- 🔥 GitLens
- 🌳 Git Graph

## 🎨 Frontend
- IntelliSense for CSS class names in HTML
- JavaScript (ES6) code snippets
- Bootstrap 5 Quick Snippets
- jQuery Code Snippets
- HTML CSS Support
- Auto Rename Tag
- Auto Close Tag
- HTMLHint

## ⚙️ Backend
- NestJS Files
- MongoDB for VS Code

---

# 📁 Project Structure

---

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
