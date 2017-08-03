#!/bin/bash
rm -rf ../meteor-build
mkdir ../meteor-build && TOOL_NODE_FLAGS="--max-old-space-size=4096" meteor build --server-only --directory ../meteor-build
cp Dockerfile ../meteor-build/Dockerfile
echo "Dockerfile"$'\n'"docker-compose.yml"$'\n'"proxies.json"$'\n'"build.sh" > ../meteor-build/.dockerignore
docker build -t lucidprogrammer/sentry ../meteor-build/
echo "login into docker cloud"
docker login -u lucidprogrammer
echo "push into docker cloud"
docker push lucidprogrammer/sentry
