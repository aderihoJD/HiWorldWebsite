import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';
import request from 'request';

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

setInterval(request('https://safe-caverns-88374.herokuapp.com/images/logo.png', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}), 30000);

app.post('/message', sendMail);

app.use((err, req, res, next) => {
  res.statusCode = err.status || 500;
  res.send({message: err.message, error: err});
});

app.listen(port, () => console.log(`Server was started on port: ${port}`));
