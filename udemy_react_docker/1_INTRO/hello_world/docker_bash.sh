docker build -t my-app . &&
docker run  --name my-app --rm \
--volume $(pwd):/app \
-p 3000:3000 \
my-app