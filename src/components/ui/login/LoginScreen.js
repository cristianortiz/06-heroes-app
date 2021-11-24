import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";

const LoginScreen = () => {
  const authC = useContext(AuthContext);
  const { dispatch } = authC;
  const navigate = useNavigate();
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { username: "Jon" },
    };
    dispatch(action);

    //if you want to use the replace
    navigate("/marvel", { replace: true });
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
