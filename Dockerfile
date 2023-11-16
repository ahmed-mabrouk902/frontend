#1
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



#2

# FROM node:latest as builder

# RUN mkdir -p /app

# WORKDIR /app

# COPY . .

# RUN npm install
# RUN npm run build --prod

# FROM nginx:alpine
# COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
# COPY --from=builder app/dist/ongular usr/share/nginx/html


#3
# FROM nginx:1.17.1-alpine
# COPY /nginx.conf /etc/nginx/nginx.conf
# COPY /dist/crudtuto-Front /usr/share/nginx/html

#4
# FROM node:latest as build

# WORKDIR /usr/local/app

# COPY ./ /usr/local/app/

# RUN npm install

# RUN npm run build

# FROM nginx:latest

# COPY --from=build /usr/local/app/dist/ongular /usr/share/nginx/html

# EXPOSE 80

FROM node:18.17.1-alpine

# Create a directory for your app
RUN mkdir -p /usr/src/app

# Set the working directory to the app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Angular CLI globally (you can also install it locally)
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose port 4200
EXPOSE 4200


CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]