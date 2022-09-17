FROM node:18.0-alpine3.14

ENV NODE_VERSION 18.0
WORKDIR /app

COPY ./src/package* /app/
RUN npm install -g npm@latest && npm install

COPY ./src /app
EXPOSE 3000
ENV CI=true
USER node

CMD ['npm' 'run' 'start']
