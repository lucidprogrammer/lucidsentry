FROM node:4.8.3-alpine
RUN apk add --no-cache libstdc++
RUN apk add --no-cache --virtual .build-deps binutils-gold curl g++ gcc gnupg libgcc linux-headers make python
RUN mkdir -p /meteor-build
COPY . /meteor-build/
RUN cd /meteor-build/bundle/programs/server && npm install
CMD ["node","/meteor-build/bundle/main.js"]
