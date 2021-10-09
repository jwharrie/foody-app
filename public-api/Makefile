all: build-image deps lint test
.PHONY: all

build-image:
	docker build -t foody-public-api:latest .
.PHONY: build-image

DOCKER_MK_TARGETS = test deps lint lint-fix

$(DOCKER_MK_TARGETS):
	- docker kill foody-public-api-build &> /dev/null
	docker container run \
	--rm \
	--tty \
	--env COMPOSER_HOME=/composer \
	--volume $(HOME)/.composer/cache:/composer/cache:cached \
	--volume $(shell pwd):/app:cached \
	--name foody-public-api-build \
	foody-public-api:latest make --debug -f Docker.mk $@
.PHONY: $(DOCKER_MK_TARGETS)
