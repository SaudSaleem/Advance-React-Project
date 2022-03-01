import React, { Component, createRef } from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Sidebar from "./sidebar";
import Users from "./users";
class Admin extends Component {
  state = {
    name: "",
    errors: {
      name: "username is required",
    },
  };
  //create Ref (Ref is alternative attribute for document.getElementById("username"))
  username = createRef();
  refDemo() {
    const username = this.username.current.value;
    console.log(username);
  }
  //custom two way data binding
  handleChange = (e) => {
    this.setState({
      // name/password
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({
      errors,
    });
    if (errors) return;
  };
  validate = () => {
    const errors = {};
    if (this.state.name.trim() === "") {
      errors.name = "";
    }
    return errors;
  };
  render() {
    return (
      <div>
        <h1>This is admin Dashboard page</h1>
        <Sidebar></Sidebar>
        <Route path="/admin/users" component={Users}></Route>
        <Route path="/admin/posts" component={Posts}></Route>
        <input
          id="username"
          ref={this.username}
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        ></input>
        {this.state.errors.name && (
          <p>Input field validation error {this.state.errors.name}</p>
        )}
      </div>
    );
  }
}
//YOU CAN ALSO USE 'JOI-BROWSER' FOR INPUT VALIDATION
export default Admin;
