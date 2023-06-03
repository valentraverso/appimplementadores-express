import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import {
    DB_URI,
    PORT
} from "./utils/config"
import connectMongo from "./utils/db/connectMongo";
import { jokesRoute } from "./routes";
import signToken from "./utils/auth/signToken";
import path from "path";

const app = express();

// Middlewars
app.use(cors());
app.use(express.json());
app.use(morgan('tiny', {
    stream: fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' })
}))

// Connect to DB and run server
connectMongo(app, DB_URI, PORT)

// Router
app.post('/token', signToken)
app.use('/jokes', jokesRoute)