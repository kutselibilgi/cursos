docker build -t python_dev . &&
docker run -it --name tp1IA --rm \
--volume $(pwd):/usr/src/tp1IA \
-p 3000:3000 python_dev \
bash
