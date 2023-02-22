FROM ubuntu:latest

WORKDIR /usr/src/udemy_react_docker

RUN apt-get update; apt-get upgrade -y

RUN apt-get install -y build-essential
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh

RUN apt-get install -y nodejs
