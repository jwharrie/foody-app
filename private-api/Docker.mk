build:
	npm run build
.PHONY: build

deps:
	npm install
.PHONY: dependencies

test:
	npm run test
.PHONY: test

lint:
	npm run lint
.PHONY: lint

lint-fix:
	npm run lint:fix
.PHONY: lint-fix
