#!/bin/bash

set -e

cd "$(dirname "$0")"

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x ../shutdown/master.sh && sudo ../shutdown/master.sh
chmod +x ../boot/master.sh && sudo ../boot/master.sh

echo "Application reboot successfully!"
