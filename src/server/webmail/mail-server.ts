import * as express from 'express';
import * as path from 'path';

const app = express();
const DOCBASE = 'lib/docbase';

const STATIC_ROUTES = ['/webmail.js'];
app.get(STATIC_ROUTES, express.static(DOCBASE));

// send homepage
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.resolve(path.join(DOCBASE, 'webmail.html')));
});

export default app;