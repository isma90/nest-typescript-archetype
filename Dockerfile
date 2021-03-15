FROM node:15.10.0-alpine

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

CMD ["yarn", "start:prod"]

RUN cd dist