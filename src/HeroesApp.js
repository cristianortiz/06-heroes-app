import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { AuthReducer } from "./auth/authReducer";

import AppRouter from "./routers/AppRouter";

const initialState = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
const HeroesApp = () => {
  const [user, dispatch] = useReducer(AuthReducer, {}, initialState);
  //update the username at login in LS, and keep logged=false if the user is logout
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
