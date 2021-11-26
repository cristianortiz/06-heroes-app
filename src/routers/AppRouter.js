import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/ui/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Router>
        {/* in react-router-dom 6 Switch does not work replace with Routes */}
        <Routes>
          <Route
            exact="true"
            path="/login"
            element={
              // PublicRoute is a HO component, and render their childs components
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          {/* the * indicates nested routes in DashboardRoutes comp */}
          <Route
            path="/*"
            element={
              // PrivateRoute is a HO component, and render their childs components
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
