import React from "react";
import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/hero/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../components/ui/navbar/NavBar";
import { Container } from "./DashboardStyles.styles";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/marvel" element={<MarvelScreen />} />
          <Route exact path="/hero/:heroeId" element={<HeroScreen />} />
          <Route exact path="/dc" element={<DcScreen />} />
          {/* default route */}
          <Route path="*" element={<MarvelScreen />} />
        </Routes>
      </Container>
    </>
  );
};

export default DashboardRoutes;