import express from 'express';
import cors from 'cors'
import MongoConnection from './config/db.js';
import * as dotenv from "dotenv";
import router from './routes/route.js';
import { errorHandler, notFoundHandler } from './middlewares/errorMiddlewares.js';

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use('/', router);
app.use(notFoundHandler);
app.use(errorHandler);

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

MongoConnection(process.env.MONGO_URI);




