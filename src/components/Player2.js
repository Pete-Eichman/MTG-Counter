import React from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

let Player2 = React.createClass({
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
      <h1>Player 2</h1>
      <h2>Life Total:</h2>
      <h2>{this.state.life}</h2>
      <Button node='a' waves='light' onClick = {this.lifeUp}>+1 Life</Button>
      <Button node='a' waves='light' onClick = {this.lifeDown}>-1 Life</Button>
      <h2>Poison Counters:</h2>
      <h2>{this.state.poison}</h2>
      <Button node='a' waves='light' onClick = {this.poisonUp}>+1 Poison</Button>
      <Button node='a' waves='light' onClick = {this.poisonDown}>-1 Poison</Button>
     </div>
  }
});

export default Player2;
