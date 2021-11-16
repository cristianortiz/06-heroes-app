import React from "react";
import { heroes } from "../../../data/heroes";
import HeroCard from "../../hero/HeroCard";
import { HeroContainer, HeroInfoDiv } from "../../hero/HeroScreen.styles";
import {
  HeroSearch,
  SearchForm,
  InputForm,
  FormButton,
} from "./SearchScreen.styles";

const SearchScreen = () => {
  const heroesFiltered = heroes;
  return (
    <>
      <HeroContainer>
        <HeroSearch>
          <h4>Search Form</h4>
          <SearchForm>
            <InputForm type="text" placeholder="find a hero"></InputForm>
            <FormButton>Search..</FormButton>
          </SearchForm>
        </HeroSearch>
        <HeroInfoDiv>
          <h4>Results</h4>
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </HeroInfoDiv>
      </HeroContainer>
    </>
  );
};

export default SearchScreen;
