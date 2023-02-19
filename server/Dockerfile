FROM node:latest



RUN npm install -g nodemon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x docker-entrypoint.sh  
ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 8080