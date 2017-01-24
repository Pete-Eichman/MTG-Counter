// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import App from './components/App';


ReactDOM.render(
  <div>
    <App />
    <Player1 />
    <Player2 />
  </div>,
  document.getElementById('app')
);
