export COMPOSE_PROJECT_NAME=microservices-graphql-grpc

build:
	docker-compose up -d --build

build-service:
	docker-compose up -d --build $$name 

start:
	docker-compose up -d

start-service:
	docker-compose up -d $$name

stop:
	docker-compose down

stop-service:
	docker-compose stop $$name

restart-service:
	docker-compose restart $$name

clean:
	docker-compose down -v
