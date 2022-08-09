FROM node:16-bullseye-slim
WORKDIR /usr/src/lights-toggle-api
COPY . .
RUN npm install
CMD ["npm","run","start"]