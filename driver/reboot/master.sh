#!/bin/bash

set -e

find . -type f -name "*.sh" -exec chmod +x {} \;

chmod +x driver/shutdown/master.sh && sudo driver/shutdown/master.sh
chmod +x driver/boot/master.sh && sudo driver/boot/master.sh

echo "Application reboot successfully!"
