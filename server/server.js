import express from 'express';
import chats from './data/data.js';
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/chats', (req, res) => {
    res.json(chats);
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})