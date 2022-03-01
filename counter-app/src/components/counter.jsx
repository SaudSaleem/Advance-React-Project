import React, { Component } from "react";
//this is controlled component, a controlled component is that component that dont have
//its state, it reply on props data and it want to update value it simply raise an event to change value
class Counter extends Component {
  state = {
    count: this.props.value, //recieved props as this.props
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  //   constructor(){
  //       super()
  //       this.handleIncrement = this.handleIncrement.bind(this)
  //   }
  render() {
    let classes = this.dynamicClasses(); //for dynamic classes use method that return dynamic classes
    return (
      <div>
        {/* we use slots like this : this.props.children */}
        {this.props.children}
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        {/* <img alt="some sea" src={this.state.imageUrl}></img> */}
        <button
          className="btn btn-secondary btn-sm"
          // onClick={() => this.handleIncrement("hello saud")}
          onClick={() => this.props.onIncrement(this.props.id)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Plz provide tags"}
        {this.renderTags()} */}
      </div>
    ); //jsx expression
    //it will compiled to react.createElement()
    //you can also use 'react.Fragment' element instead of Div wrapper
  }
  handleIncrement = (arg) => {
    //this will be unavialable in this function, so we have to bind 'this' in constrtor to get 'this' scope
    //OR you can use arrow function
    console.log(arg);
    this.setState({ count: this.state.count + 1 }); //use setState() method to change state of react component
  };
  dynamicClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.value === 0 ? <span>Zero</span> : this.props.value;
  }
  //react does'nt have v-if or ngIf directives for conditional renderings
  renderTags() {
    if (this.state.tags.length === 0) return <p>No tag present</p>;
    else return this.state.tags.map((tag) => <li key={tag}>tag</li>);
  }
}

export default Counter;
