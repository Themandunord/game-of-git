NEST_PROJECT_FOLDER=services/git-service
WEB_APP_PROJECT_FOLDER=services/webapp-service
PRISMA_PROJECT_FOLDER=prisma/

up:
	docker-compose up -d;

up_build:
	docker-compose up -d --build;

up_data:
	docker-compose -f docker-compose.data-only.yml up -d;

down:
	docker-compose down;

prisma_deploy:
	cd ${PRISMA_PROJECT_FOLDER} && prisma deploy;

prisma_seed:
	cd ${PRISMA_PROJECT_FOLDER} && prisma seed;

prisma_reset:
	cd ${PRISMA_PROJECT_FOLDER} && prisma reset;

install_nest: ## Install Node App Dependencies
	cd ${NEST_PROJECT_FOLDER} && yarn;

start_dev:
	cd ${NEST_PROJECT_FOLDER} && yarn start:dev;

test: 
	cd ${NEST_PROJECT_FOLDER} && yarn test;

test_watch: 
	cd ${NEST_PROJECT_FOLDER} && yarn test:watch;

test_cov: 
	cd ${NEST_PROJECT_FOLDER} && yarn test:cov;

test_debug:
	cd ${NEST_PROJECT_FOLDER} && yarn test:debug;

test_e2e:
	cd ${NEST_PROJECT_FOLDER} && yarn test:e2e;

build_schema:
	cd ${PRISMA_PROJECT_FOLDER} \
	&& graphql get-schema --project database \
	&& graphql codegen --project database;

copy_env:
	cp .envrc.example .envrc