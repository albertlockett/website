import '../src/sass/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WebmailHomePage } from './components/WebmailHomePage';

ReactDOM.render(
  <WebmailHomePage />,
  document.getElementById('app')
);