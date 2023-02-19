FROM node:latest

WORKDIR /chatapp

COPY package*.json ./

RUN npm install


COPY . .


CMD [ "npm", "start" ]
