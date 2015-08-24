FROM iojs:2.5

ADD ./app/ /app/
ADD ./npmrc /root/.npmrc

WORKDIR /app

RUN /app/runner/init.sh

EXPOSE 80
