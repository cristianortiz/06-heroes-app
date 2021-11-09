import { heroes } from "../data/heroes";
export const getHeroByID = (id) => {
  return heroes.find((hero) => hero.id === id);
};
