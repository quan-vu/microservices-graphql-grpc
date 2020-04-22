TAG ?= latest
DOCKER_HUB_ORG ?= huyquanvu1

install:
	npm install --loglevel=error

build:
	npm run build

start: build
	npm run start

lint:
	npm run lint

nodemon:
	npm run nodemon

watch-ts:
	npm run watch-ts

develop: build
	$(MAKE) -j2 nodemon watch-ts

build-image:
	cp -R ../proto proto
	docker build -t $(DOCKER_HUB_ORG)/microservices-graphql-grpc:$(TAG) .;
	rm -r proto

push-image:
	docker push $(DOCKER_HUB_ORG)/microservices-graphql-grpc:$(TAG)

# queries

# create-product:
# 	curl 'localhost:4000/graphql' -H 'Content-Type: application/json' -d 
	

# get-product:
# 	curl 'localhost:4000/graphql' -H 'Content-Type: application/json' -d 