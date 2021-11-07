FROM node:latest
WORKDIR /app

ADD package.json package-lock.json ./
ADD src src
RUN npm install

CMD npm start
