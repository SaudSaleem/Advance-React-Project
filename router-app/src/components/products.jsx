import React, { Component } from "react";
import { Link } from "react-router-dom";
class Products extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>This is products page</h1>
        <Link to="/products/1" className="m-2">
          Products 1
        </Link>
        <Link to="/products/2" className="m-4">
          Products 2
        </Link>
        <Link to="/products/3" className="m-4">
          Products 3
        </Link>
        <Link to="/products/4" className="m-4">
          Products 4
        </Link>
      </div>
    );
  }
}

export default Products;
