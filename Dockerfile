# Use the official Node.js image as a base image
FROM node:alpine3.11

# Create a directory for your app
RUN mkdir -p /ongular/src/app

# Set the working directory to the app directory
WORKDIR /ongular/src/app

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

# Start the Angular development server
CMD ["ng", "serve", "--host", "193.168.33.10", "--port", "4200"]