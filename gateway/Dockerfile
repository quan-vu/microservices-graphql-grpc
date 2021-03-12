FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app/gateway

COPY . /app/gateway

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]