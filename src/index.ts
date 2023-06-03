import express from "express";
import {
    DB_URI,
    PORT
} from "./utils/config"
import connectMongo from "./utils/db/connectMongo";

const app = express();

// Connect to DB and run server
connectMongo(app, DB_URI, PORT)

// Router
