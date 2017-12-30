
import { Socket } from 'net';
import * as IMAPParser from 'imap-parser';
import { IMAPStates as States } from './imap-states';

// TODO Conection Timeouts

export class IMAPConnection { 

  parser: IMAPParser;
  socket: Socket;
  state: States;

  constructor(socket) {

    this.socket = socket;
    this.parser = new IMAPParser;
    this.state = States.NOT_AUTHENTICATED;

    this.socket.pipe(this.parser);
    this.parser.on('data', this.onLine);

    // bind class methods
    this.onLine = this.onLine.bind(this);
  }


  private onLine(line) {
    const [ tag, command, ...args ] = line;

    console.log('IMAP LINE: ' + line);
    console.log('IMAP CMD: ' + command);
    console.log('IMAP TAG: ' + tag);
    console.log('IMAP ARGS: ' + args);

    switch(command) {

    }
  }

}