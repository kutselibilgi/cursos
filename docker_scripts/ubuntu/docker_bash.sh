docker build -t ubuntu_python . &&
docker run -it --name ubuntu_python3 --rm \
--volume $(pwd):/usr/src/ubuntu_python3 \
-p 3000:3000 ubuntu_python \
bash


