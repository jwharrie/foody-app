all: build-image deps lint test
.PHONY: all

build-image:
	docker build -t foody-private-api:latest .
.PHONY: build-image

DOCKER_MK_TARGETS = build test deps lint lint-fix

$(DOCKER_MK_TARGETS):
	- docker kill foody-private-api-build &> /dev/null
	docker container run \
	--rm \
	--volume $(shell npm config get cache):/root/.npm:cached \
	--volume $(shell pwd):/app:cached \
	--name foody-private-api-build \
	foody-private-api:latest make --debug -f Docker.mk $@
.PHONY: $(DOCKER_MK_TARGETS)
