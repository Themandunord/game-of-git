# A Game Of Git 👑 🤔 🎮 🏆 🔥

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 🔨Heavily In Development, not close to final state yet.🛠️

A Game of Git is intended to be an approach at gamifying the development experience by using efficient modern web development practices and advanced GitHub Webhooks and APIs.

... Yes we are inspired by George R. R. Martin.

## Development Environment

### Requirements

The local development environment requires the following setup:

-   Docker (🐳)
-   Node
-   Direnv
-   ngrok

### Configuration

#### Makefile

This project comes loaded with a Makefile for convenience, simply run `make` or `make help` to get a list of available commands.

#### ENV

This project is setup using `direnv`, to take advantage of this ensure that direnv is installed, then copy and populate the `.envrc` file by running `make copy_env`.

Remember to run `direnv allow` to load the variables.

(If you want to expose a port to allow for GitHub webhooks, you'll need to open the NestJs port by using `ngrok http 3000` and copying the generated external url to the `GIT_SERVICE_DOMAIN` in the `.envrc`. This domain will be used when setting up webhooks on repositories allowing for GitHub webhooks to come into your local development environment.)

#### Yarn Workspaces

The project is setup using Yarn Workspaces with some common scripts being shared across the various workspaces such as `build` and `test`, allowing for easy package version concurrency and command execution.

### Container Orchestration

To ensure development is snappy the only containers used locally are Hasura and Postgres, this has been setup with Docker Compose and some convenience functions.

To build and start the containers simply use `make up`. (In the event that you need to explicitly build the containers `--build`, use `make up_build`.)

To stop the containers run `make down`. If you need to destroy the mounted volumes suffix this command `make down_v`.

### Hasura

To develop the data layer appropriately the Hasura ecosystem is being embraced fully. Ensure that the Hasura console is running by executing `make hasura_console` and performing any database alterations using that exposed console. This will ensure that static migration files are created.

#### Generate

To generate the static Hasura Schema files, run `make hasura_generate`.

#### Migrate

To run the Hasura migrations, run `make hasura_migrate`.

#### Seed

Sadly Hasura doesn't expose well controlled seed mechanisms, so a home-rolled one had to be made.

To run the dev seeders, execute `make hasura_seed`.

### Running Services

The entire stack is TypeScript ❤️, the back end is using the NestJs framework and the front end is using React with React Hooks.

#### The Back End, NestJs

NestJs, out of the box, comes with clear npm scripts. So they will not all be listed here.

The `./nest-app/` directory contains the NestJs App, run `yarn` to install the dependencies the `yarn start:dev` to begin serving the NestJs App at `localhost:3000` with live file watching.

Run `yarn test` in order to execute the test suite.

#### The Front End, React

The React App was created using CreateReactApp and follows standard React/TS Best Practices.

To get the ront end dev environment, run `yarn start` in the `react-app` directory.

The components are being developed using Cosmos, to start the cosmos server run `yarn cosmos` to see the component library being served @ `localhost:5000`.

Run `yarn test` in order to execute the yarn test suite.

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
