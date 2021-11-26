import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//PrivateRoute is a high order component and receives components as their children
//children prop is like an array of components
const PrivateRoute = ({ children }) => {
  //useAuth props to check if the user is logged
  const { user } = useContext(AuthContext);
  //use Navigate hook in component version to go any route in the app
  //but in this is case only if the user is logged
  return user.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
