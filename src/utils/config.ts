require("dotenv").config();

const PORT: number | string = process.env.PORT || 4000;
const DB_URI: string = process.env.MONGO_URI;

const AUDIENCE: string = process.env.AUDIENCE;

export {
    PORT,
    DB_URI,
    AUDIENCE
}