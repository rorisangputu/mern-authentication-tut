import express from 'express'
import 'dotenv/config'
import { connectDb } from './db/connectDb.js';



const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDb();
    console.log("Listening on Port 3000")
})