FROM iojs:2.5

ADD ./app/ /app/
ADD ./npmrc /root/.npmrc

WORKDIR /app

RUN npm i

EXPOSE 80
