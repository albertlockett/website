import { SMTPServer } from 'smtp-server';
import { Mail } from '../../database';

const MSPORT = 9003;
const MSHOST = undefined;

const onConnect = (session, callback) => {
  console.log('connection attempted');
  return callback();
};


const onData = (stream, session, callback: Function) => {
  stream.on('data', data => console.log(data.toString()));
  stream.on('end', async () => {
    try {
      await Mail.create({
        receiver: session.envelope.rcptTo[0].address,
        sender: session.envelope.mailFrom.address
      });
      callback();
    } catch(e) {
      console.log('there was an error');
      console.log(e);
      callback(e);
    }
  });
};

const mailServer = new SMTPServer({
  authOptional: true,
  onConnect,
  onData
});


export const start = () => {
  mailServer.listen(MSPORT, MSHOST, () => {
    console.log('SMTP server listening on port ' + MSPORT);
  });
}