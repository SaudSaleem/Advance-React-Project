import React, { Component } from "react";
class ProductsDetails extends Component {
  state = {};
  handleSave = () => {
    //navigate to /products
    this.props.history.push("/products");
  };
  render() {
    return (
      <div>
        <h1> Products Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
  componentDidMount = () => {
    console.log("routes parameter", this.props.match.params);
  };
}

export default ProductsDetails;
