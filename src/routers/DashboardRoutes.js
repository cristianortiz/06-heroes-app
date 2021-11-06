import React from "react";
import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../components/ui/navbar/NavBar";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/marvel/:heroeid" element={<HeroScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        {/* default route */}
        <Route path="*" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
