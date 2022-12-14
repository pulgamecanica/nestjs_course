<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Index
---
| Title | Description | Commit |
| ----- | ----------- | ------ |
| Coffees Controller | Create the coffees Controller, create function to handle an incomming GET request to /coffees |  |
| Dynamic route params | Create a function to handel an incoming GET request with dynamic parameters to /coffees/:id |  |


## Part I
---
### Controllers
	Controller are responsible for handling HTTP requests, and return an appropiate response.
	The controllers use decorators which can also specity a specific controller for a given route, and for each method (GET, POST; etc).
```ts
@Controller('coffees') // the decorator can have an argument which will generate a route map
export class CoffeesController {
@Get() // the decorator can take an argument which along whith it's controller route, will generate also a nested route map
	findAll(): string {
		return ("This will return all coffees");
	}
}
```
### Controller Route Parameters (dynamic routes)
	Sometimes you have to handle requests with a dynamic route parameter. Let's say for example we want to have an index, which will be defined with a number in our route.
	For example:
	/coffees/1 OR /coffees/22
	In this example, we want the same function request handler for two different routes. This can be archieved with decorators.
```ts
@Controller('coffees') ...
export class Coffee...
...
@Get(':id') // the decorator can also take a parameter with a semicolon indicating that it is a dynamic parameter passed to the route
	findOne(@Param() params) { // import { Param } from @nestjs/common;
		return `This returns #${params.id} index`; // The name you give in the decorator after the colon is going to be available through the params
	}
}
```
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript tutorial from the official nest course.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
