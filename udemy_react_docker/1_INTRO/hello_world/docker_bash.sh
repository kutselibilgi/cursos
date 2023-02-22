docker build -t hello_world_image . &&
docker run  --name hello_world_container --rm \
--volume $(pwd):/app \
-p 3000:3000 \
hello_world_image