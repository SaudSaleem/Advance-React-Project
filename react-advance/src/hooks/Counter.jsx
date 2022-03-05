import React, { Fragment, useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";
function Counter() {
  //const array = useState(0);
  //array[0] == this.state.count
  //const count = array[0];
  //array[1] == this.setState({})

  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  //custom hook
  useDocumentTitle("saud");

  //function inside will called everytime when this functional component mount and updates
  useEffect(() => {
    console.log("Component is mounted or updated");
    //this function is optional (this will only run for componentWillUnmount)
    return () => {
      console.log("compoennt destroyed");
    };
  }, [count]);
  //second arg in above function tells react ONLY call function (inside useeffect) when count changes
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked :{count} times
      </div>
      <button onClick={() => setState(count + 1)}>Increase </button>
    </Fragment>
  );
}

export default Counter;
//you cannot call useState hook inside loop, if,etc
// class component lifecycles
//componentDidMount, componentWillUnmount == useEffect() in functional componnet
