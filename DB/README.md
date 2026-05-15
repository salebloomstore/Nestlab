docker compose down -v --remove-orphans
sudo chown 1000:1000 -R . | sudo chmod 777 -R .
find . -type f -name "*.sh" -exec chmod +x {} \;
docker compose up -d --build --force-recreate



docker exec -it shard-dn-primary mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-dn-assistant mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-dn-secretary mongosh -u admin -p password --authenticationDatabase admin

docker exec -it shard-hn-primary mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-hn-assistant mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-hn-secretary mongosh -u admin -p password --authenticationDatabase admin

docker exec -it shard-sg-primary mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-sg-assistant mongosh -u admin -p password --authenticationDatabase admin
docker exec -it shard-sg-secretary mongosh -u admin -p password --authenticationDatabase admin

docker exec -it config-sv-primary mongosh -u admin -p password --authenticationDatabase admin
docker exec -it config-sv-assistant mongosh -u admin -p password --authenticationDatabase admin
docker exec -it config-sv-secretary mongosh -u admin -p password --authenticationDatabase admin
