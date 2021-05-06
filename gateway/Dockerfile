FROM node:12
ENV NODE_ENV=production

WORKDIR /app/gateway
COPY . /app/gateway
COPY ./protobufs /app/protobufs

RUN yarn && yarn build

EXPOSE 4000

CMD [ "node", "/app/gateway/dist/index.js" ]