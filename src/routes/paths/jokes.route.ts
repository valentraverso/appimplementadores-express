import express from 'express';
import { jokesController } from '../../controllers';
import verifyToken from '../../middlewares/auth';
const router = express.Router();

const {
    getAllJokes,
    postJokeByApi
} = jokesController;

const jokesRoute = router
    .get('/all/:page?', getAllJokes)
    .post('/post/api/:category', verifyToken, postJokeByApi);

export { jokesRoute }