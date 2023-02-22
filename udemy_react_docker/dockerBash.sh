docker build -t ubuntu_node . &&
docker run -it --name udemy_react_docker --rm \
--volume $(pwd):/usr/src/udemy_react_docker \
--net=host ubuntu_node \
bash


