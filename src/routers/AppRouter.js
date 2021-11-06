import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/ui/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <>
      <Router>
        {/* in react-router-dom 6 Switch does not work replace with Routes */}
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          {/* the * indicates nested routes in DashboardRoutes comp */}
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
