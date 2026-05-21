#!/bin/bash

# =====================================================
# GENERATE MONGODB KEYFILE
# =====================================================

openssl rand -base64 756 > /keyfile/mongo-keyfile


# =====================================================
# SET SECURE PERMISSIONS
# =====================================================

chmod 400 /keyfile/mongo-keyfile
chown 999:999 /keyfile/mongo-keyfile


# =====================================================
# DONE
# =====================================================

echo "KEYFILE CREATED"

apt-get update && apt-get install -y docker.io

docker rm -f $(hostname)
