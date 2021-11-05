import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import LoginScreen from "../components/ui/login/LoginScreen";

import NavBar from "../components/ui/navbar/NavBar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        {/* in react-router-dom 6 Switch does not work replace with Routes */}
        <Routes>
          <Route path="/" element={<MarvelScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
