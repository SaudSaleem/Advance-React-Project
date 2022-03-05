import React, { useContext } from "react";
import UserContext from "./UserContext";
function Login() {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("ali")}>Login</button>
    </div>
  );
}

export default Login;
