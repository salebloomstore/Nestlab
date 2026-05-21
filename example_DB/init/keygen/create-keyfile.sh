#!/bin/bash

openssl rand -base64 756 > /keyfile/mongo-keyfile

chmod 400 /keyfile/mongo-keyfile
chown 999:999 /keyfile/mongo-keyfile

echo "KEYFILE CREATED"
