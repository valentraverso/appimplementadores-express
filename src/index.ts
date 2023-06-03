import express from "express";
import {
    DB_URI,
    PORT
} from "./utils/config"
import connectMongo from "./utils/db/connectMongo";
import { jokesRoute } from "./routes";
import signToken from "./utils/auth/signToken";

const app = express();

// Middlewars
app.use(express.json());

// Connect to DB and run server
connectMongo(app, DB_URI, PORT)

// Router
app.post('/token', signToken)
app.use('/jokes', jokesRoute)