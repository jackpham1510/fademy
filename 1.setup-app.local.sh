chmod +x webapp/build-webapp
chmod +x server/copy-assets.sh
docker network create fademy_net
docker-compose -f docker-compose.local-setup.yml up --build