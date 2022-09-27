FROM node:18.0-alpine3.14 AS builder

ENV NODE_VERSION 18.0
WORKDIR /app

COPY ./src/package* /app/
RUN npm install -g npm@8.19.1 && npm install --force

COPY ./src /app
RUN npm run build
USER node


FROM nginx:1.23.1
COPY ./default.conf /etc/nginx/conf.d/
WORKDIR /var/www/html
COPY --from=builder /app/build/ /var/www/html/
