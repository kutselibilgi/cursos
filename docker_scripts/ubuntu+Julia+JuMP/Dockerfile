FROM ubuntu:22.04

WORKDIR /usr/src/PO

RUN apt-get update; apt-get upgrade -y

RUN apt-get install -y build-essential
RUN apt-get install -y curl

RUN wget https://julialang-s3.julialang.org/bin/linux/x64/1.8/julia-1.8.1-linux-x86_64.tar.gz

# RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
# RUN bash nodesource_setup.sh

# RUN apt-get install -y nodejs
