import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";
class App extends Component {
  state = { currentUser: { name: "Saud" } };
  handlesLoggedIn = (username) => {
    console.log("Getting the user:", username);
    const user = { name: "mosh" };
    this.setState({
      currentUser: user,
    });
  };
  render() {
    return (
      // <UserContext.Provider value={this.state.currentUser}>
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handlesLoggedIn,
        }}
      >
        <div>
          <MoviePage></MoviePage>
          <Login></Login>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
