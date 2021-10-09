#!/bin/bash

set -e

chmod 0775 /app
chmod 0775 /app/bootstrap/cache
chmod 0777 /app/storage/
chmod 0777 /app/storage/app/
chmod 0777 /app/storage/logs/
chmod 0777 /app/storage/framework/
chmod 0777 /app/storage/framework/views/
chmod 0777 /app/storage/framework/cache/
chmod 0777 /app/storage/framework/sessions/

exec "$@"
