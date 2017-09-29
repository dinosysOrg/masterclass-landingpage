FROM mhart/alpine-node:8

RUN mkdir /app
WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --no-cache git

COPY package.json /app
RUN npm install

COPY . /app
EXPOSE 3000

CMD ["./node_modules/.bin/nodemon", "index"]