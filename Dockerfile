FROM node:lts-alpine3.18

WORKDIR /usr/src/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]
