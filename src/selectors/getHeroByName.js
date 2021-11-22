import { heroes } from "../data/heroes";

export const getHeroesByName = (heroName = "") => {
  console.log("i was called");
  heroName = heroName.toLowerCase();
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(heroName)
  );
};
