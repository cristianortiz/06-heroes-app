import React from "react";
import HeroList from "../hero/HeroList";

const DcScreen = () => {
  const publisher = "DC Comics";
  return (
    <>
      <h1>DC Heroes</h1>
      <HeroList publisher={publisher} />
    </>
  );
};

export default DcScreen;
