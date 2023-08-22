FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 9200

CMD ["node", "./app.js"]