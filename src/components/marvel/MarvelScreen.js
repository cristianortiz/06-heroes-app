import React from "react";
import HeroList from "../hero/HeroList";

const MarvelScreen = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <h1>Marvel Heroes</h1>
      <HeroList publisher={publisher} />
    </>
  );
};

export default MarvelScreen;
