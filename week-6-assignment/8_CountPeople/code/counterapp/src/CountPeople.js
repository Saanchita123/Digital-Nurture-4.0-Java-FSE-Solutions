import React, { Component } from "react";
export class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1,
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.entrycount + 1,
    }));
  };
  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>People Counter</h2>

        <p>Number of people entered : {this.state.entrycount}</p>
        <p>Number of people exited: {this.state.exitcount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit}>Logout</button>
      </div>
    );
  }
}
