FROM node:14
EXPOSE 3000 9229

WORKDIR /home/api

COPY package.json /home/api/
COPY yarn.lock /home/api/

RUN yarn

COPY . /home/api

COPY ormconfig.docker.json /home/api/ormconfig.json

RUN yarn build

CMD ./scripts/start.sh