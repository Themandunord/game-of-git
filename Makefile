# NEST_PROJECT_FOLDER=services/nest-app
# WEB_APP_PROJECT_FOLDER=services/webapp-service
PRISMA_PROJECT_FOLDER=prisma/

help: ## Show this help.
	@grep -h "##" $(MAKEFILE_LIST) | grep -v grep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: help

.DEFAULT_GOAL := help

copy_env: ## Copy the envrc.example to .envrc
	cp .envrc.example .envrc

up: ## Run Docker Compose Up to start the dev stack of Prisma & Postgres
	docker-compose up -d;

up_build: ## Run Docker Compose Build to build the container images of the dev stack of Prisma & Postgres
	docker-compose up -d --build;

down: ## Run Docker Compose Down to stop the dev stack of Prisma & Postgres
	docker-compose down;

down_v: ## Run Docker Compose Down to stop the application's containers with the -v flag to drop the stored volumes
	docker-compose down -v;



prisma_deploy: ## Deploy the Prisma changes by running prisma deploy in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma deploy;

prisma_generate: ## Generate the prisma schema based on the generators config
	cd ${PRISMA_PROJECT_FOLDER} && prisma generate;

prisma_seed: ## Run Seed the Prisma data set by running prisma seed in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma seed;

prisma_reset: ## Reset the Prisma deployment by running prisma reset in the prisma/ directory
	cd ${PRISMA_PROJECT_FOLDER} && prisma reset;