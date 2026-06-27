#!/bin/bash

set -e

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x driver/shutdown/devlop.sh && sudo driver/shutdown/devlop.sh
chmod +x driver/boot/devlop.sh && sudo driver/boot/devlop.sh

echo "Application reboot successfully!"
