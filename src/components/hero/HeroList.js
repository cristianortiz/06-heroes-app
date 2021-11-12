import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";
import { HeroCardsBox } from "./HeroCards.styles";

const HeroList = ({ publisher }) => {
  //useMemo to only render again if publisher dependency changes
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // const heroes = getHeroesByPublisher(publisher);

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
