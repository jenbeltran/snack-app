FROM node:10

WORKDIR /code

ENV PORT=3000
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD npm run start
