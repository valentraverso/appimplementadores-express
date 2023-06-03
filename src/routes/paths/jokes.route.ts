import express from 'express';
import { jokesController } from '../../controllers';
const router = express.Router();

const {
    postJokeByApi
} = jokesController;

const jokesRoute = router
    .post('/post/api/:category', postJokeByApi)

export { jokesRoute }