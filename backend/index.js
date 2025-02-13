import express from 'express'
import 'dotenv/config'
import { connectDb } from './db/connectDb.js';
import authRoutes from './routes/auth.route.js'


const databaseConn = connectDb();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({message: "Helloooo"})
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    databaseConn
    console.log("Listening on Port 3000")
})