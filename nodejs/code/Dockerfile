FROM factoryx/nodejs:4.1.1

ADD ./app/ /app/
ADD ./npmrc /root/.npmrc

RUN useradd -ms /bin/bash user
ENV HOME /home/user
RUN chown -R user:user /app
USER user

WORKDIR /app

RUN npm i

EXPOSE 8080
