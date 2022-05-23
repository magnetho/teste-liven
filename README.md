
## Description
Esse é o projeto em cumprimento ao que foi solicitado pela Liven. O projeto foi estruturado para que cada módulo tenha 3 camadas principais: 
Infra: responsável pelo acesso aos dados
Domain:  responsável pelas entidades e os serviços (regra de negócio)
Presentation: responsável pela entrega das informações ao cliente

## Principais Frameworks

Nestjs: Foi desenvolvido em Nestjs para maior produtividade no desenvolvimento
Postgres: Banco de dados relacional para salvar os dados 
TepyORM: Para conexão com o banco de dados e migrations da aplicação
Swagger: Documentação da aplicação
Potman: Para realizar os teste automatizados( foi adicionado na pasta doc o arquivo teste-liven.postman_collection.json para realizar o teste da aplicação)
Heroku: Responsável pela hospedagem da aplicação e do banco de dados (no arquivo .env  tem a url para acesso para ao banco)


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

## Stay in touch

- Author - [Manoel Neto]

