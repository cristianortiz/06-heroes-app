import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { getHeroesByName } from "../../../selectors/getHeroByName";
import HeroCard from "../../hero/HeroCard";
import { HeroCardsBox } from "../../hero/HeroCards.styles";
import {
  HeroSearch,
  SearchForm,
  InputForm,
  FormButton,
} from "./SearchScreen.styles";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //separate search terms in query string
  const query = queryString.parse(location.search);

  //destructuring the first parameter 'q' from the query string
  const { q = "" } = query; //this keep the heroName
  //asign q search term to searchIput
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  //get the hero by name
  //const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  //function to handle the search of heroes by name
  const handleSearch = (e) => {
    console.log(searchText);
    e.preventDefault();
    //query string  with useNavigate
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      {
        <HeroSearch>
          <h2>Search a Hero</h2>
          <SearchForm name="searchForm" onSubmit={handleSearch}>
            <InputForm
              type="text"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              placeholder="find your hero"
            ></InputForm>
            <FormButton>Search</FormButton>
          </SearchForm>
        </HeroSearch>
      }
      <HeroCardsBox>
        {q === 0
          ? null
          : heroesFiltered.length === 0 && <h3>There is no results : {q}</h3>}
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </HeroCardsBox>
    </>
  );
};

export default SearchScreen;
