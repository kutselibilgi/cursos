docker build -t udemy_react_docker . &&
docker run -it --name 1_INTRO --rm \
--volume $(pwd):/usr/src/1_INTRO \
--net=host udemy_react_docker \
bash


