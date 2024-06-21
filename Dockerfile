FROM node:latest
# Add a work directory
WORKDIR /my-site
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
# CMD [ "npm", "install" ]
