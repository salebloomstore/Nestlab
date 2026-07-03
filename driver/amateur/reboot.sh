#!/bin/bash

set -e

cd "$(dirname "$0")"

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x ../shutdown/amateur.sh && sudo ../shutdown/amateur.sh
chmod +x ../boot/amateur.sh && sudo ../boot/amateur.sh

echo "Application reboot successfully!"
