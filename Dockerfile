FROM node:8

WORKDIR /usr/src/app

COPY /image/* ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]