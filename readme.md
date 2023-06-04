[![TypeScript](https://badges.frapsoft.com/typescript/awesome/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)

<h1 align=center>App Implementadores API</h1>

API created by Valentino Traverso about jokes. In this API you would find jokes with they setup, punchline and category. 
I wish you like it😁

## Index
- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Seeder](#seeder)
- [Endpoints](#endpoints)

## Getting Started

### Setup

Setup `.env` with the keys defined in the file `.env.example`.

`:MONGO_URI` need to be your localhost or another cluster from Mongo.
`:AUDIENCE` your localhost with the port in wich you are running the API.

### Run service

The command to run the service is:

    npm run server

## Built with

- [Express](https://expressjs.com/es/)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Seeder

If you want to have data in your first contact with the API. If necessary to uncomment the seeder function in `src/utils/db/connectMongo.ts` on `line 10`.

It will create 105 documents in your database.

## Endpoints

### Get all
`http://<url>/jokes/all/:pagination`

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `pagination` | optional | number  |You could paginate documents.  _If you don't stablish a page it will return the first 25 registers or page 0._  Every page will return 25 register.        

### POST by API

`http://<url>/jokes/post/api/:category`

**Parameters**
|          Name | Required |  Type   | Values | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| :-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `category` | required | string  | `programming` `general` `knok-kcnock` | You could stablish wich category of joke you like most and it will add **1 random** joke to your database.

## Authors
- [Valentino Traverso](https://github.com/valentraverso)