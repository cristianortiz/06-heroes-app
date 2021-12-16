import React from "react";
import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/hero/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import NavBar from "../components/ui/navbar/NavBar";
import SearchScreen from "../components/ui/search/SearchScreen";
import { Container } from "./DashboardStyles.styles";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          {/* default route */}
          <Route path="*" element={<MarvelScreen />} />
        </Routes>
      </Container>
    </>
  );
};

export default DashboardRoutes;
