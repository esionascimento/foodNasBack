FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3001
ENV DB_NAME=foodNas
ENV MONGO_DB_URL=mongodb://localhost:27017
ENV SECRET=SECRET
ENV SALT=1
ENV ORIGIN_CORS=http://localhost:3000

EXPOSE 3001

CMD ["npm", "run", "dev"]