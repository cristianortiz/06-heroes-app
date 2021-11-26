import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//PrivateRoute is a high order component and receives components as their children
//children prop is like an array of components
const PrivateRoute = ({ children }) => {
  //useAuth props to check if the user is logged
  const { user } = useContext(AuthContext);
  //useLoction to keep track of the url visited by a logged user and the search query
  const { search, pathname } = useLocation();
  //set a localStorage var with the actual route visited and concate a search query
  //if searchScreen was visited the lastPath will contains the search term also
  localStorage.setItem("lastPath", pathname + search);
  //use Navigate hook in component version to go any route in the app
  //but in this is case only if the user is logged
  return user.logged ? children : <Navigate exact="true" to="/login" />;
};

export default PrivateRoute;
