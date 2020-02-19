# NEST_PROJECT_FOLDER=services/nest-app
# WEB_APP_PROJECT_FOLDER=services/webapp-service

help: ## Show this help.
	@grep -h "##" $(MAKEFILE_LIST) | grep -v grep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: help

.DEFAULT_GOAL := help


#
# Dev
#
dev: ## Start up the local dev setup - spin up docker-compose, open code instances for common, nest and react, start hasura console
	docker-compose up -d \
	&& code ./common \
	&& code ./nest-app \
	&& code ./react-app \
	&& make hasura_console \

#
# CONFIG
#

copy_env: ## Copy the envrc.example to .envrc
	cp .envrc.example .envrc

#
# YARN WORKSPACES
#

install: ## Install the node dependencies across all workspacess
	yarn


test: ## Run the tests across all the various workspaces
	yarn workspaces run test

test_ci: ## Run the tests with the --ci flag across all the various workspaces
	yarn workspaces run test --ci


build: ## Run build command across all the various workspaces
	yarn workspaces run build

build_ci: ## Run build command with the --ci flag across all the various workspaces
	yarn workspaces run build --ci

build_common: ## Run the build command in the @game-of-git/common library
	yarn workspace @game-of-git/common run build

start_nest: ## Run yarn workspace nest-app start:dev
	yarn workspace @game-of-git/nest-app start:dev

#
# DOCKER
#

up: ## Run Docker Compose Up to start the dev stack of Prisma & Postgres
	docker-compose up -d;

up_build: ## Run Docker Compose Build to build the container images of the dev stack of Prisma & Postgres
	docker-compose up -d --build;


down: ## Run Docker Compose Down to stop the dev stack of Prisma & Postgres
	docker-compose down;

down_v: ## Run Docker Compose Down to stop the application's containers with the -v flag to drop the stored volumes
	docker-compose down -v;


#
# HASURA
#

hasura_seed: ## Seeds Hasura with data that is not required on every migration
	./hasura/seed_admin.bash

hasura_migrate: ## Run Hasura Migrations
	cd ./hasura && hasura migrate apply

hasura_console: ## Open Hasura Console
	cd ./hasura && hasura console

hasura_generate: ## Generate the GraphQL/TypeScript schema
	cd ./common && yarn hasura:generate