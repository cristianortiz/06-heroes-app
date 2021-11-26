import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//PublicRoute is a high order component and receives components as their children
//children prop is like an array of components
const PublicRoute = ({ children }) => {
  //useAuth props to check if the user is logged
  const { user } = useContext(AuthContext);
  //use Navigate hook in component version to go any route in the app
  //if the user is logged send it to /marvel route prevent to return to login sren
  return !user.logged ? children : <Navigate to="/marvel" />;
};

export default PublicRoute;
