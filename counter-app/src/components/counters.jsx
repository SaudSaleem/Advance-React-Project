import React, { Component } from "react";
import Counter from "../components/counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            selected={true}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            {/* we can send slots by writing here */}
            <p>Counter #{counter.id}</p>
          </Counter>
          //  props: value and selected
          // childerns // same like slots in Vue
        ))}
      </div>
    );
  }
}

export default Counters;
