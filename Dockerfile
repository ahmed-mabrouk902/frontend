# FROM node:18.17.1-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install -g @angular/cli
# RUN npm ci
# COPY . .
# RUN npm run build --prod
# EXPOSE 80
# CMD ["ng", "serve", "--host", "192.168.33.10", "--port", "80"]
FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm", "start"]