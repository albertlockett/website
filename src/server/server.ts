import 'colors';
import * as express from 'express';
import { start as startSMTPServer } from './smtp/smtp-server';

startSMTPServer();

const app = express();

const DOCBASE = 'lib/docbase';
const STATIC_ROUTES = ['/', '/index.html', '/index.js'];
app.get(STATIC_ROUTES, express.static(DOCBASE));

app.listen(9002, () => {
  console.log('app server listening on port 9002');
});


