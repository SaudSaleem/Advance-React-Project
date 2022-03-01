import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/1">Products Details</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
