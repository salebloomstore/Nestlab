#!/bin/bash

set -e

docker compose up -d --build --force-recreate

echo "Application boot successfully!"
