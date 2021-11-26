import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

const LoginScreen = () => {
  //get authContext and their props
  const authC = useContext(AuthContext);
  const { dispatch } = authC;
  const navigate = useNavigate();
  //function to handle login event
  const handleLogin = () => {
    //set the action to send to reducer
    const action = {
      type: types.login,
      //for now harcode the username in payload
      payload: { username: "Jon" },
    };
    dispatch(action);
    //get the last path visited from local storage, or go to another route by default
    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    //use the lastPath to return to the lastPath visited before logout
    navigate(lastPath, { replace: true });
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>
      <button onClick={handleLogin}> Login</button>
    </div>
  );
};

export default LoginScreen;
