NEST_PROJECT_FOLDER=services/git-service
WEB_APP_PROJECT_FOLDER=services/webapp-service
PRISMA_PROJECT_FOLDER=prisma/

up: ## Run Docker Compose Up to start up the entire application
	docker-compose up -d;

up_data: ## Run Docker Compose Up to start up only the database and prisma, run development locally
	docker-compose -f docker-compose.data-only.yml up -d;

up_build: ## Docker Docker Compose Build to build the container images
	docker-compose up -d --build;

down: ## Run Docker Compose Down to stop the application's containers
	docker-compose down;

prisma_deploy: ## Deploy the Prisma changes by running prisma deploy in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma deploy;

prisma_seed: ## Run Seed the Prisma data set by running prisma seed in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma seed;

prisma_reset: ## Reset the Prisma deployment by running prisma reset in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma reset;

install_nest: ## Install Node App Dependencies
	cd ${NEST_PROJECT_FOLDER} && yarn;

start_dev: ## Start the NestJs App in Watch Mode, run yarn start:dev
	cd ${NEST_PROJECT_FOLDER} && yarn start:dev;

test: ## Test the NestJs App, run yarn test
	cd ${NEST_PROJECT_FOLDER} && yarn test;

test_watch: ## Test the NestJs App in Watch Mode, run yarn test:watch
	cd ${NEST_PROJECT_FOLDER} && yarn test:watch;

test_cov: ## Test the NestJs App coverage, run yarn test:cov
	cd ${NEST_PROJECT_FOLDER} && yarn test:cov;

test_debug: ## Debug the NestJs App and Tests, run yarn test:debug
	cd ${NEST_PROJECT_FOLDER} && yarn test:debug;

test_e2e: ## Run E2E Tests on the NestJs App, run yarn test:e2e
	cd ${NEST_PROJECT_FOLDER} && yarn test:e2e;

build_schema: ## Manually Build and Copy the Prisma Schema Types
	cd ${PRISMA_PROJECT_FOLDER} \
	&& graphql get-schema --project database \
	&& graphql codegen --project database;

copy_env: ## Copy the envrc.example to .envrc
	cp .envrc.example .envrc

help: ## Show this help.
	@grep -h "##" $(MAKEFILE_LIST) | grep -v grep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: help

.DEFAULT_GOAL := help
