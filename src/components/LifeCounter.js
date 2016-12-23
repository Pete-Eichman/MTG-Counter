// LifeCounter.js
import React from 'react';

class LifeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeTotal: "20"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newLifeTotal = this.state.lifeTotal + 1;
    this.setState({ lifeTotal: newLifeTotal });
  }

  render() {
    return(
      <div>
        <h1>{this.props.message}</h1>
        <h1>Life Total: {this.state.lifeTotal}</h1>
      </div>
    );
  }
};

export default LifeCounter;
