import React from 'react';
import { Button, Card, Row, Col, CardPanel} from 'react-materialize';

let Player1 = React.createClass({
  getInitialState: function() {
    return {
      life: 20,
      poison: 0
    };
  },

  lifeUp: function() {
    this.setState({
      life: this.state.life + 1
    });
  },

  lifeDown: function(){
    this.setState({
      life: this.state.life - 1
    });
  },

  poisonUp: function() {
    this.setState({
      poison: this.state.poison + 1
    });
  },

  poisonDown: function() {
    this.setState({
      poison: this.state.poison - 1
    });
  },

  render: function() {
    return <div>
      <h1>Player 1</h1>
      <h2>{this.state.life}</h2>
      <Button floating large className="green z-depth-3" node='a' waves='green' onClick = {this.lifeUp}>+1</Button>
      <Button floating large className="red z-depth-3" node='a' waves='red' onClick = {this.lifeDown}>-1</Button>
      <h3>Poison: {this.state.poison}</h3>
      <Button floating large className="purple z-depth-3" node='a' waves='light' onClick = {this.poisonUp}>+1 &#x2620;</Button>
      <Button floating large className="purple z-depth-3" node='a' waves='light' onClick = {this.poisonDown}>-1 &#x2620;</Button>
    </div>
  }
});

export default Player1;
