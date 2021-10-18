docker exec fademy_mysql bash -c "mysql -u root -p123456789 -e \"DROP DATABASE web_nc_fademy;\""
docker exec fademy_mysql bash -c "mysql -u root -p123456789 -e \"CREATE DATABASE web_nc_fademy CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\""
docker exec fademy_mysql bash -c "mysql -u root -p123456789 -e \"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789';flush privileges;\""
docker exec fademy_elasticsearch bash -c "curl -XDELETE \"http://fademy_elasticsearch:9222/web_nc_courses\""
docker exec fademy_elasticsearch bash -c "curl -XPUT \"http://fademy_elasticsearch:9222/web_nc_courses\" -H 'Content-Type: application/json' -d'{\"settings\":{\"analysis\":{\"analyzer\":{\"autocomplete\":{\"tokenizer\":\"autocomplete\",\"filter\":[\"lowercase\"]},\"autocomplete_search\":{\"tokenizer\":\"lowercase\"}},\"tokenizer\":{\"autocomplete\":{\"type\":\"edge_ngram\",\"min_gram\":2,\"max_gram\":10,\"token_chars\":[\"letter\",\"digit\"]}}}},\"mappings\":{\"properties\":{\"id\":{\"type\":\"integer\"},\"title\":{\"type\":\"text\",\"analyzer\":\"autocomplete\"},\"price\":{\"type\":\"float\"},\"originalPrice\":{\"type\":\"float\"},\"discount\":{\"type\":\"float\"},\"totalEnrollment\":{\"type\":\"integer\"},\"avgStar\":{\"type\":\"float\"},\"totalReview\":{\"type\":\"integer\"},\"totalView\":{\"type\":\"integer\"},\"creatorId\":{\"type\":\"integer\"},\"categoryId\":{\"type\":\"integer\"},\"createdDate\":{\"type\":\"date\"},\"updatedDate\":{\"type\":\"date\"},\"complete\":{\"type\":\"boolean\"},\"status\":{\"type\":\"integer\"}}}}'"
docker-compose -f docker-compose.deploy.yml up --build -d