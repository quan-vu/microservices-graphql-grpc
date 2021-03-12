#stage1
# FROM node:12.20.1 as builder
# WORKDIR /usr/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# #stage 2
# FROM node:12.20.1

# WORKDIR /usr/app
# COPY package*.json ./
# RUN npm install --production

# COPY --from=builder /usr/app/dist ./dist

# COPY .env .
# CMD node dist/index.js

FROM node:12
ENV NODE_ENV=production

WORKDIR /app/gateway
COPY . /app/gateway
COPY ./protobufs /app/protobufs

RUN yarn && yarn build

EXPOSE 4000

CMD [ "node", "/app/gateway/dist/index.js" ]