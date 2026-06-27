#!/bin/bash

set -e

docker compose --env-file .env -f server/builde/docker-compose.yml up -d --build --force-recreate

echo "Application boot successfully!"
