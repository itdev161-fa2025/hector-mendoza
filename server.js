import express from 'express';
import connectDataBase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDataBase();

//API endpoints
app.get('/', (req, res) => 
    res.send('http get request sent to root api endpoint')
);

//Connection listener 
app.listen(3000, () => console.log(`Express server running on port 3000`));