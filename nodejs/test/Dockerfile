FROM factoryx/nodejs:4.1.1

ADD ./app/ /app/
ADD ./npmrc /root/.npmrc
RUN apt-get update && apt-get install build-essential -y

RUN useradd -ms /bin/bash user && chown -R user:user /app
ENV HOME /home/user
USER user

WORKDIR /app

RUN /app/runner/init

EXPOSE 80
