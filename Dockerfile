FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /ongular/src/app

# The /app directory should act as the main application directory
WORKDIR /ongular/src/app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install Angular CLI globally (you can also install it locally)
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build --prod





# Start the app
CMD [ "ng", "serve","--host", "193.168.33.10", "--port", "4200" ]