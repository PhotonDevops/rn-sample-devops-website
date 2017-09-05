FROM node:6.11.2-alpine

USER root
WORKDIR /devops

ADD ./public  /devops/public
ADD ./src /devops/src
ADD ./config /devops/config
ADD ./scripts /devops/scripts
ADD ./package.json /devops/package.json

RUN npm install

EXPOSE 3000

CMD npm start