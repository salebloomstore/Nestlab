#!/bin/bash

set -e

docker compose --env-file .env -f server/devlop/docker-compose.yml down -v --remove-orphans

echo "Application shutdown successfully!"
