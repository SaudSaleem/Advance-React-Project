import React, { Component } from "react";
import UserContext from "./UserContext";
import MovieRow from "./MovieRow";
class MovieList extends Component {
  static contextType = UserContext;
  state = {};
  componentDidMount() {
    console.log("contexr", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
            <MovieRow></MovieRow>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
//class static proprty
// MovieList.contextType = UserContext;
export default MovieList;
