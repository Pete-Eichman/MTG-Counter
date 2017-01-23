// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col } from 'react-materialize';
import Player1 from './components/Player1';
import Player2 from './components/Player2';

ReactDOM.render(
  <div>
    <h1>Welcome to MTG-Counter!</h1>
    <Player1 />
    <Player2 />
  </div>,
  document.getElementById('app')
);
