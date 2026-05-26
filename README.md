# 🚀 Backend API System (NestJS + MongoDB + Docker)

![Nginx](https://img.shields.io/badge/Reverse%20Proxy-Nginx%201.28.0-brightgreen)
![NestJS](https://img.shields.io/badge/Backend-NestJS%2011.1.24-red)
![Mongo Express](https://img.shields.io/badge/Admin-Mongo--Express%201.0.2-orange)
![Docker Engine](https://img.shields.io/badge/Docker%20Engine-27.5.1-blue)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2.32.4-blue)
![Swagger](https://img.shields.io/badge/API-Swagger%2011.4.4-green)
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

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

---

# 🚀 Deployment

### 0. Create Portainer if it does not already exist

```bash
docker compose -f portainer/docker-compose.yml up -d --build --force-recreate
```

### 0. Create the shared Docker network if it does not already exist

```bash
docker network create bloomn-etword
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
