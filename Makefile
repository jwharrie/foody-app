all: build up
.PHONY: all

up:
	docker-compose up
.PHONY: up

down:
	docker-compose down
.PHONY: down

build:
	$(MAKE) --debug -C private-api all
	$(MAKE) --debug -C public-api all
	$(MAKE) --debug -C web-ui all
.PHONY: build