import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import sendMail from './mailer';

const app = express();

const port = 3001;

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.post('/call', (req, res) => {
    console.log(req.body);
    res.send('Yes');
});

app.post('/message', sendMail);

app.listen(port, () => console.log(`Server was started on port: ${port}`));

