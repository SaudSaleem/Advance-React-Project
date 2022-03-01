import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 },
    ],
  };
  //event handling
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({
      counters,
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters,
    });
  };
  handleIncrement = (id) => {
    const counterIndex = this.state.counters.findIndex(
      (counter) => counter.id === id
    );
    const counters = this.state.counters;
    counters[counterIndex] = {
      id: id,
      value: this.state.counters[counterIndex].value + 1,
    };
    this.setState({
      counters: counters,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
