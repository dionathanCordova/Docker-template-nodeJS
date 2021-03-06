
import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes';
import cors from 'cors';

// import './database';

dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('Server started at port: 3333');
})