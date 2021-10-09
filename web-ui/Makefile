all: build-image deps lint test
.PHONY: all

build-image:
	docker build -t foody-web-ui:latest .
.PHONY: build-image

DOCKER_MK_TARGETS = test deps lint lint-fix

$(DOCKER_MK_TARGETS):
	- docker kill foody-web-ui-build &> /dev/null
	docker container run \
	--rm \
	--volume $(shell npm config get cache):/root/.npm:cached \
	--volume $(shell pwd):/app:cached \
	--name foody-web-ui-build \
	foody-web-ui:latest make --debug -f Docker.mk $@
.PHONY: $(DOCKER_MK_TARGETS)
