import React from 'react';
import Player1 from './Player1'
import Player2 from './Player2'
import { Button, Card, CardPanel, Row, Col} from 'react-materialize';

const App = props => {

  return (
    <div>
      <Row>
      <h1 className="center white-text">Welcome to MTG Counter!</h1>
        <Col s={6} m={6} l={6} className="center">
          <CardPanel className="blue black-text z-depth-5">
            <Player1 />
          </CardPanel>
        </Col>
        <Col s={6} m={6} l={6} className="center">
          <CardPanel className="orange lighten-2 black-text z-depth-5">
            <Player2 />
          </CardPanel>
        </Col>
      </Row>
    </div>
  )
}

export default App;
