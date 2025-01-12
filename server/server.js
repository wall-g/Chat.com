import express from 'express';
import chats from './data/data.js';
import cors from 'cors'
import connection from './config/db.js';
import * as dotenv from "dotenv"

const app = express();
app.use(cors());
dotenv.config({debug:true});


app.get('/chats', (req, res) => {
    res.json(chats);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

connection(process.env.MONGO_URI);