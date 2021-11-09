import React from "react";
import { Navigate, useParams } from "react-router";
import { getHeroByID } from "../../selectors/getHeroByID";

const HeroScreen = () => {
  //extract heroId usign dom useParams hook
  const { heroeId } = useParams();
  //console.log(heroeId);
  //get info of a hero using their id
  const hero = getHeroByID(heroeId);
  //a little validation if any hero is returned above
  if (!hero) {
    return <Navigate to="/" />;
  }
  console.log(hero);
  return <div>Hero Screen</div>;
};

export default HeroScreen;
