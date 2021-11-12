import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardTitle,
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
        <CardBody>
          <CardImage>
            <img
              alt={superhero}
              height="200"
              src={`./assets/heroes/${id}.jpg`}
            ></img>
          </CardImage>
          <CardListItem>
            <CardTitle>
              <h3>{superhero}</h3>
            </CardTitle>
            <CardItemText>{alter_ego}</CardItemText>
            <CardItemText>{characters}</CardItemText>
            <CardItemText>{first_appearance}</CardItemText>
            <Link exact="true" to={`../hero/${id}`}>
              More info
            </Link>
          </CardListItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default HeroCard;
