# Makefile

# Variáveis
NPM = docker compose run app npm
NODE = docker compose exec -it app
RED = \033[0;31m
NC = \033[0m

# Regras

.PHONY:  up
up: stop npm-install
	@ echo "$(RED)\nINICIALIZANDO CONTAINERS DA APLICAÇÃO\n$(NC)"
	docker-compose up

.PHONY: stop
stop:
	@ echo "$(RED)\nPARANDO CONTAINERS DA APLICAÇÃO\n$(NC)"
	docker-compose down

.PHONY: factory
factory:
	@ echo "$(RED)\nCONSTRUINDO APLICAÇÃO\n$(NC)"
	docker-compose build --no-cache


.PHONY: build
build: stop clean factory

.PHONY: clean
clean:
	@ echo "$(RED)\nPREPARANDO AMBIENTE\n$(NC)"
	@if [ -f package-lock.json ]; then rm -f package-lock.json; fi
	@if [ -d node_modules ]; then sudo rm -rf node_modules; fi


.PHONY: terminal
terminal:
	@ echo "$(RED)\nINICIANDO TERMINAL DA APLICAÇÃO\n$(NC)"
	$(NODE) bash

.PHONY: npm
npm:
	@ echo "$(RED)\nINSTALANDO DEPENDÊNCIA \n$(NC)" $$DEPENDENCY
	@read -p "Digite o nome da dependência: " DEPENDENCY; \
	$(NPM) install $$DEPENDENCY

.PHONY: npm-install
npm-install:
	@ echo "$(RED)\nINSTALANDO DEPENDÊNCIAS DA APLICAÇÃO\n$(NC)"
	$(NPM) install
