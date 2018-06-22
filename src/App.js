import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3, 4, 1],
      input: 0
    };
  }

  handleInputChange(e) {
    // Object.assign({}, OldObject, {name: 'Shea'});
    this.setState({
      input: +e.target.value
    });
  }

  handleClick() {
    let copy = this.state.nums.slice();
    copy.push(this.state.input);
    this.setState({
      nums: copy
    });
  }

  render() {
    let sum = this.state.nums.reduce((tot, num) => tot + num, 0);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={e => this.handleInputChange(e)} type="number" />
        <button onClick={e => this.handleClick()} type="button">
          Submit
        </button>

        <hr />
        {sum}
      </div>
    );
  }
}

export default App;
