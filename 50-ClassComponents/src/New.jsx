import React, { Component } from "react";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const  ob = this.props.koiObject || {}; // Handle missing koiObject safely

    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 2 })}>
          Increase Count
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 2 })}>
          Decrease Count
        </button>
        <h3>Current Count: {this.state.count}</h3>
        <div>
          <h1>{this.props.koiNaam}</h1>
          {ob &&
            Object.entries(ob).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
        </div>
      </div>
    );
  }
}

export default New;

