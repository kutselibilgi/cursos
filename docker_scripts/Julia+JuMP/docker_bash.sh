docker build -t julia_jump . &&
docker run -it --name PO --rm \
--volume $(pwd):/usr/src/PO \
-p 3000:3000 julia_jump \
bash


