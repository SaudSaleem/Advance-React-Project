import React, { Component } from "react";
import queryString from "query-string"; //it is a popular npm package used for handling query strings of router
class Posts extends Component {
  state = {};
  render() {
    const { location } = this.props;
    const queryStr = queryString.parse(location.search); //this will parse query string into object shape
    console.log("queryStr", queryStr);
    return (
      <div>
        <h1>This is Posts page</h1>
      </div>
    );
  }
}

export default Posts;
