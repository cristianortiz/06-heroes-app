import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";
import { HeroCardsBox } from "./HeroCards.styles";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      <HeroCardsBox>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))}
      </HeroCardsBox>
    </>
  );
};

export default HeroList;
