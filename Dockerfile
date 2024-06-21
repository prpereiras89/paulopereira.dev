FROM node:latest
# Add a work directory
COPY my-site my-site
WORKDIR /my-site
# Expose port
EXPOSE 3000
# Start the app
# CMD [ "npm", "install" ]
