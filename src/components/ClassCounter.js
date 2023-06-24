import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }
  incrementOfFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  render() {
    return (
      <>
        <button onClick={() => this.incrementOfFive()}>
          Increment: {this.state.count}
        </button>
      </>
    );
  }
}

export default ClassCounter;
