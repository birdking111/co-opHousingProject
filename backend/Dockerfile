FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Install nodemon
RUN npm install -g nodemon

# Bundle app source
COPY . /usr/src/app

# Bind container to correct port
EXPOSE 8080

# Start up the app
CMD ["npm", "start"]
