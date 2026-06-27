#!/bin/bash

set -e

docker compose --env-file .env -f server/builde/docker-compose.yml down -v --remove-orphans

echo "Application shutdown successfully!"
