FROM node:14 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm ci
COPY . .
RUN npm run build 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]