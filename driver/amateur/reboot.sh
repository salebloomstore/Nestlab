#!/bin/bash

set -e

cd "$(dirname "$0")"

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x shutdown.sh && sudo ./shutdown.sh
chmod +x boot.sh && sudo ./boot.sh

echo "Application reboot successfully!"
