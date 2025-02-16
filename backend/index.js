import express from 'express'
import 'dotenv/config'
import { connectDb } from './db/connectDb.js';
import authRoutes from './routes/auth.route.js'


const databaseConn = connectDb();
const app = express();
app.use(express.json()); // allows us to parse incoming requests :req.body
const PORT = process.env.PORT || 3000;



app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    databaseConn
    console.log("Listening on Port 3000")
})