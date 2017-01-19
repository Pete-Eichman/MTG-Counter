import React from 'react';

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
      life: this.state.poison + 1
    });
  },

  poisonDown: function() {
    this.setState({
      life: this.state.poison - 1
    });
  },

  render: function() {
    return <div>
      <h1>Player 1</h1>
      <h2>Life Total:</h2>
      <h2>{this.state.life}</h2>
      <button onClick = {this.lifeUp}>+1 Life</button>
      <button onClick = {this.lifeDown}>-1 Life</button>
      <button onClick = {this.poisonUp}>+1 Poison</button>
      <button onClick = {this.poisonDown}>-1 Poison</button>
     </div>
  }
});

export default Player1;
