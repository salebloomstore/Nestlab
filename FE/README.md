# 🚀 Frontend UI Stack - Docker Enterprise Frontend

![Docker](https://img.shields.io/badge/Docker-Enterprise-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![jQuery](https://img.shields.io/badge/jQuery-AJAX-blue)
![OpenLayers](https://img.shields.io/badge/OpenLayers-GIS-green)
![TinyMCE](https://img.shields.io/badge/TinyMCE-Editor-red)
![Nginx](https://img.shields.io/badge/Nginx-Static%20Server-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

### - Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
### - Created: May 15, 2026

---

## 📌 Overview

This is a **lightweight enterprise frontend system** built with static web technologies and deployed using Docker + Nginx.

It provides:

- 🎨 Responsive UI with Bootstrap 5
- ⚡ AJAX communication using jQuery
- 🗺 GIS mapping with OpenLayers
- 📝 Rich text editor using TinyMCE
- 🌐 Static server via Nginx
- 🐳 Fully containerized deployment (Docker)

---

## ⚠️ Note

This project is **frontend-only** and is designed to integrate with backend APIs such as:

- NestJS REST API
- Node.js / Express API
- Laravel API
- Microservices architecture

No backend logic or database is included.

---

## 🧱 Tech Stack

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

### 🎨 UI Layer
- IntelliSense for CSS class names in HTML
- Bootstrap 5 Quick Snippets
- jQuery Code Snippets
- HTML CSS Support
- Auto Rename Tag
- Auto Close Tag
- HTMLHint

---

## 📁 Project Structure

---

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
