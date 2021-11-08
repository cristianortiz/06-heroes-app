import React from "react";
import {
  CardContainer,
  CardImage,
  CardTitleFlex,
  CardBody,
  CardListItem,
  CardItemText,
} from "./HeroCards.styles";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  publisher,
  first_appearance,
  characters,
}) => {
  return (
    <>
      <CardContainer>
        <CardTitleFlex>
          <h3>{superhero}</h3>
        </CardTitleFlex>
        <CardBody>
          <CardImage>
            <img height="200" src={`./assets/heroes/${id}.jpg`}></img>
          </CardImage>
          <CardListItem>
            <CardItemText>{alter_ego}</CardItemText>
            <CardItemText>{characters}</CardItemText>
            <CardItemText>{first_appearance}</CardItemText>
          </CardListItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default HeroCard;
