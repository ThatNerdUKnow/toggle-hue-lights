FROM node:16
WORKDIR /usr/src/lights-toggle-api
COPY . .
RUN npm install
CMD ["npm","run","start"]