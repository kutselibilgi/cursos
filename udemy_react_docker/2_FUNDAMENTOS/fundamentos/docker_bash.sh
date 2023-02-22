docker build -t react_node_image . &&
docker run  --name react_node_container --rm \
--volume $(pwd):/app \
-p 3000:3000 \
react_node_image