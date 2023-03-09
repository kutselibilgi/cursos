docker build -t ubuntu_java13 . &&
docker run -it --name udemy_java13_docker --rm \
--volume $(pwd):/usr/src/udemy_java13_docker \
-p 3000:3000 ubuntu_java13 \
bash


