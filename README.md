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
- Created: May 21, 2026

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

# 🚀 Development Environment

Before running this project, please install the following tools:

#### For `Windows` operating system
- [WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/windows/wsl/install)
- [Kali Linux](https://apps.microsoft.com/detail/9pkr34tncv07)

#### For `Windows and Linux` operating systems
- [Git](https://git-scm.com/downloads)

#### For `Windows` operating system
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) 

#### For `Linux` operating system
- [Docker Engine](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/)

#### For `Windows and Linux` operating systems
- [Visual Studio Code](https://code.visualstudio.com/)

## Recommended VS Code Extensions

- [Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

---

# 🚀 Deployment

### 0. Create the Portainer if [it does not already exist] and [you are using Linux operating system]

```bash
docker compose down -v --remove-orphans
docker compose up -d --build --force-recreate
```

### 0. Create the Docker network if it does not already exist

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

#### Please configure example_DB/.env_example before running
```bash
cp example_DB/.env_example example_DB/.env && docker compose -f example_DB/docker-compose.yml up -d --build --force-recreate
```

#### Please configure example_BE/.env_example before running
```bash
cp example_BE/.env_example example_BE/.env && docker compose -f example_BE/docker-compose.yml up -d --build --force-recreate
```

#### Please configure example_FE/.env_example before running
```bash
cp example_FE/.env_example example_FE/.env && docker compose -f example_FE/docker-compose.yml up -d --build --force-recreate
```
