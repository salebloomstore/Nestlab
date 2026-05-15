docker compose down -v --remove-orphans
docker compose up -d --build --force-recreate
sudo chown 1000:1000 -R . | sudo chmod 777 -R .

00. find . -type f -name "*.sh" -exec chmod +x {} \;
00. docker compose up -d --build --force-recreate keygen
00. docker compose up -d --build --force-recreate shard-dn-primary shard-dn-assistant shard-dn-secretary
00. docker compose up -d --build --force-recreate shard-hn-primary shard-hn-assistant shard-hn-secretary
00. docker compose up -d --build --force-recreate shard-sg-primary shard-sg-assistant shard-sg-secretary
00. docker compose up -d --build --force-recreate config-sv-primary config-sv-assistant config-sv-secretary



06. docker compose up -d --build --force-recreate mongo-router
07. docker compose up -d --build --force-recreate mongo-express



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
