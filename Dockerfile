FROM node:6.7.0
MAINTAINER lunarca

RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

CMD ["npm", "start"]