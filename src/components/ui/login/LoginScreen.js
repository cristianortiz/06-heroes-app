import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  let history = useNavigate();
  const handleClick = () => {
    history("/");
    //if you want to use the replace
    //history("/",{replace:true})
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>
      <button onClick={handleClick}> Login</button>
    </div>
  );
};

export default LoginScreen;
