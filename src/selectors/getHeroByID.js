import { heroes } from "../data/heroes";
export const getHeroesByID = (id) => {
  return heroes.filter((hero) => hero.id === id);
};
