import express from "express";
import {
    DB_URI,
    PORT
} from "./utils/config"
import connectDB from "./utils/db/connectDB";

const app = express();

connectDB(app, DB_URI, PORT)