# 🚀 NestJS REST API - Docker Enterprise Backend

![Docker](https://img.shields.io/badge/Docker-Enterprise-blue)
![NestJS](https://img.shields.io/badge/NestJS-Backend-red)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-brightgreen)
![API](https://img.shields.io/badge/Type-REST%20API-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

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

```bash
docker compose up -d --build
sudo chown 1000:1000 -R . | sudo chmod 777 -R .
