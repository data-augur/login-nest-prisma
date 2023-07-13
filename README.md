
## Description

Login Auth on [Nest](https://github.com/nestjs/nest) framework 
TypeScript
Prisma ORM

## Requirements
Node V 18.0.0 or higher
Docker for Database

## Installation

```bash
$ yarn install
```

## Database
```bash
$ docker-compose up -d
```
Once the dockers are up you should be able to access php-myadmin at http://localhost:3311
login with username : root, pwd: 1234

## Migrations

```bash
$ yarn prisma migrate dev

or 
$ yarn prisma generate
$ yarn prisma migrate deploy

```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Swagger API documentation
Swagger api documentation is available at http://localhost:3002/docs

##Seed the Database 

We dont have a signup endpint run the seed so that users are created and you can test the login end point
```bash
$ yarn prisma db seed

```



