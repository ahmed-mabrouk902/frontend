FROM node:alpine3.11

# Create an application directory
RUN mkdir -p ongular/src/app

# The /app directory should act as the main application directory
WORKDIR ongular/src/app

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

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 4200

# Set host to localhost / the docker image
ENV NUXT_HOST=193.168.33.10

# Set app port
ENV NUXT_PORT=4200

# Start the app
CMD [ "ng", "serve","--host", "193.168.33.10", "--port", "4200" ]