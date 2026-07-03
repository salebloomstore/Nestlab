# 🚀 Backend API System (NestJS + MongoDB + Docker)

![Nginx](https://img.shields.io/badge/Reverse%20Proxy-Nginx%201.31.1-brightgreen)
![NestJS](https://img.shields.io/badge/Backend-NestJS%2011.0.1-red)
![Docker Engine](https://img.shields.io/badge/Docker%20Engine-28.5.2-blue)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-v2.40.3-blue)
![Swagger](https://img.shields.io/badge/API-Swagger%2011.4.4-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 👨‍💻 Author

- Author: [Nguyễn Hoàng Anh](https://www.facebook.com/FakeofHA)
- Created: May 31, 2026

---

## Recommended VS Code Extensions

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

# 🚀 Deployment

### 0. Docker empty

```bash
docker stop $(docker ps -aq) 2>/dev/null
docker rm -f $(docker ps -aq) 2>/dev/null
docker rmi -f $(docker images -aq) 2>/dev/null
docker volume rm $(docker volume ls -q) 2>/dev/null
docker network rm $(docker network ls -q --filter type=custom) 2>/dev/null
docker builder prune -af
```

### Create the shared Docker network if it does not already exist

```bash
docker network create master-netwrk
```

### Fix permissions

```bash
sudo chown 1000:1000 -R . && sudo chmod 777 -R .
```

### Grant execute permission

```bash
find . -type f -name "*.sh" -exec chmod +x {} \;
```

### Build

```bash
cp .env.example .env
chmod +x driver/master/reboot.sh && sudo ./driver/master/reboot.sh
```

### Dev

```bash
cp .env.example .env
chmod +x driver/amateur/reboot.sh && sudo ./driver/amateur/reboot.sh
```
