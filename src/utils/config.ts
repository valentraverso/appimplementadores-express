require("dotenv").config();

const PORT: number | string = process.env.PORT || 4000;
const DB_URI: string = process.env.MONGO_URI;

export {
    PORT,
    DB_URI
}