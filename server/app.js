import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';

import sendMail from './mailer';

const app = express();
const dev = app.get('env') !== 'production';

const normalizePort = port => parseInt(port, 10);
const port = normalizePort(process.env.PORT || 5000);

app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.use(cors({origin: '*'}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
}

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.post('/message', sendMail);

app.post('/test', (req, res) => {
  res.status(200).send(`Everything ok`);
});

app.listen(port, () => console.log(`Server was started on port: ${port}`));
