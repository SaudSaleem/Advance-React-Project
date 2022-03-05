import React, { useContext } from "react";
import UserContext from "./UserContext";
function MovieRow(props) {
  const currentUser = useContext(UserContext);
  return (
    <div>
      Movie Row{currentUser.currentUser ? currentUser.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
