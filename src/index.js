import bodyParser from 'body-parser';
import express from 'express';

import { connectDB } from './config/database.js';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, async () => {
    console.log(`Server running on port ${process.env.PORT}`);
    await connectDB();
});
