FROM node:6.7.0
MAINTAINER lunarca

RUN mkdir -p /usr/src/mockbot 
WORKDIR /usr/src/mockbot

ADD package.json .
RUN npm install --production

ADD . /usr/src/mockbot

CMD ["ls", "/usr/src/mockbot"]

CMD ["npm", "start"]