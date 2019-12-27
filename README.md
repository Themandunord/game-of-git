# A Game Of Git 👑 🤔 🎮 🏆 🔥

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## 🔨Heavily In Development, not close to final state yet.🛠️

A Game of Git is intended to be an approach at gamifying the development experience by using efficient modern web development practices and advanced GitHub Webhooks and APIs.

... Yes we are inspired by George R. R. Martin.

## Development Environment

### Requirements

The local development environment requires the following setup:

- Docker (🐳)
- Node
- Direnv
- ngrok

### Configuration

Copy the `.envrc.example` to `.envrc` from the root of the project by running the convenience function `make copy_env` (equivalent of `cp .envrc.example .envrc`). Remember to run `direnv allow` to load the variables.

(If you want to expose a port to allow for GitHub webhooks, you'll need to open the NestJs port by using `ngrok http 3000` and copying the generated external url to the `GIT_SERVICE_DOMAIN` in the `.envrc`. This domain will be used when setting up webhooks on repositories allowing for GitHub webhooks to come into your local development environment.)

#### Yarn Workspaces

The project is setup using Yarn Workspaces with some common scripts being shared across the various workspaces such as `build` and `test`, allowing for easy package version concurrency and command execution.

### Container Orchestration

To ensure development is snappy the only containers used locally are Prisma and Postgres, this has been setup with Docker Compose and some convenience functions.

To build and start the containers simply use `make up_data`, this is a convenience function to run `docker-compose -f docker-compose.data-only.yml up -d`.
(In the event that you need to explicitly build the containers `--build`, use `make up_build_data`.)

#### Prisma

Prisma has some commands that need to be run, and we have convenient Makefile commands to run them from the root with ease!

- `make prisma_deploy` - this will execute `prisma deploy` to deploy the Prisma schema to the Postgres database and generate the TypeScript schema files.
- `make prisma_seed` - this seeds the Prisma database, presently it just seeds a user.
- `make prisma_reset` - this will run `prisma reset`, it requires user confirmation as it _will_ nuke the entire database back to it's original state.

(If you ever want to interact with prisma directly, simply navigate to the `prisma/` directory.)

### Running Services

The entire stack is TypeScript (❤️), the back end is using the NestJs framework and the front end is using Vue.

#### The Back End, NestJs

NestJs, out of the box, comes with clear npm scripts. So they will not all be listed here.

- `/services/git-service` is deprecatedd, being migratedt o `nest-app`.

The `services/git-service/` directory contains the NestJs App, run `yarn` to install the dependencies the `yarn start:dev` to begin serving the NestJs App at `localhost:3000` with live file watching.

#### The Front End, Vue

The Vue App has been scaffolded using the Vue CLI, so devleopment is a breeze. Simply run `yarn serve` in the `services/webapp-service/` directory and the Vue app will compile and serve at `localhost:8080` with live file watching.

## Setup

### GitHub Access

In order to function, the service needs permission to access GitHub's API on your behalf. GoG will require a generated personal access token from GitHub which can be creatd by visiting your `Settings` page, then `Developer Settings` > `Personal access tokens`.

Give the token a meaningful name so that you can remember _why_ you made this token (`game-of-git`, for instance). You'll need the following permissions for proper access:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```
