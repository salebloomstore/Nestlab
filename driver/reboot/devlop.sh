#!/bin/bash

set -e

cd "$(dirname "$0")"

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x ../shutdown/devlop.sh && sudo ../shutdown/devlop.sh
chmod +x ../boot/devlop.sh && sudo ../boot/devlop.sh

echo "Application reboot successfully!"
