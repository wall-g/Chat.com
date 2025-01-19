import express from 'express';
import chats from './data/data.js';
import cors from 'cors'
import MongoConnection from './config/db.js';
import * as dotenv from "dotenv";;
import MysqlConnection from './config/mysql_db.js'

const app = express();
app.use(cors());
dotenv.config({debug:true});


app.get('/chats', (req, res) => {
    res.json(chats);
})

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

MongoConnection(process.env.MONGO_URI);

MysqlConnection(process.env.MYSQL_DB_NAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, process.env.MYSQL_HOST);



