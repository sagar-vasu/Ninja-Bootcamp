
import express, { Request, Response } from 'express';
import mongoose from './config/db'
import cors = require('cors');

let db = mongoose.connection
const PORT: any = process.env.PORT || 3000

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('we are connected!')
});


const app: express.Application = express();

app.use(cors())
app.use(express.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});


app.use('/', require('./routes'))
