#!/bin/bash

set -e

cd "$(dirname "$0")"

docker compose --env-file ../../.env -f ../../server/master/docker-compose.yml down -v --remove-orphans

echo "Master shutdown successfully!"
