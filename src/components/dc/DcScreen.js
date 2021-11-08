import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import HeroList from "../heroes/HeroList";

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
