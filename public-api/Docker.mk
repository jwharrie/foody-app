deps:
	composer install --no-suggest
.PHONY: deps

test:
	./vendor/bin/phpunit --colors=always
.PHONY: test

lint:
	./vendor/bin/phpcs . --standard=ruleset.xml
.PHONY: lint

lint-fix:
	./vendor/bin/phpcbf . --standard=ruleset.xml
.PHONY: lint-fix
