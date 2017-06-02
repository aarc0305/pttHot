FROM node:boron

RUN mkdir -p /usr/src/pttHot
WORKDIR /usr/src/pttHot

COPY package.json /usr/src/pttHot
RUN npm install

COPY . /usr/src/pttHot

EXPOSE 3000

CMD ["npm", "start"]
