import React from 'react';
import {Dropdown, Button} from 'react-materialize';

const App = ({name}) =>
  <Dropdown trigger={
    <Button>Drop me!</Button>
  }>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Bye</p>
  </Dropdown>;

export default App;
