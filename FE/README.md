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

### 🎨 UI Layer
- HTML5
- CSS3
- Bootstrap 5

### ⚡ Client Logic
- JavaScript (Vanilla)
- jQuery (AJAX, DOM handling)

### 🗺 Mapping / GIS
- OpenLayers (OSM maps, GIS rendering)

### 📝 Rich Text Editor
- TinyMCE (WYSIWYG editor)

### 🌐 Web Server
- Nginx (Static file serving)

### 🐳 DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure

---

```bash
docker compose up -d --build
sudo chown 1000:1000 -R . | sudo chmod 777 -R .
