// LifeCounter.js
import React from 'react';

class LifeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeTotal: 20
    };
  }

  onClick(e) {
    this.setState({
        lifeTotal: this.state.lifeTotal + 1
    });
  }

  render() {
    return(
      <div>
        <h1>{this.props.message}</h1>
        <h1>Life Total: {this.state.lifeTotal}</h1>
        <button onClick={this.onClick.bind(this)}>Gain 1 Life</button>
      </div>
    );
  }
};

export default LifeCounter;
