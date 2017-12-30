import { createServer } from 'net';
import *  as IMAPParser from 'imap-parser';
import { IMAPConnection } from './imap-connection';

const IMAPPORT = 9004;

const server = createServer(socket => {
  console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
  return new IMAPConnection(socket);
});

server.listen(IMAPPORT);