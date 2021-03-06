import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByID } from "../../selectors/getHeroByID";
import {
  HeroContainer,
  HeroTitle,
  HeroImgDiv,
  HeroInfoDiv,
  HeroInfoList,
  HeroInfoItem,
  ButtonReturn,
} from "./HeroScreen.styles";

const HeroScreen = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    //console.log("aprete el boton return");
    navigate(-1);
  };
  //extract heroId usign dom useParams hook
  const { heroeId } = useParams();
  //console.log(heroeId);
  //get info of a hero using their id, and render only if heroeId changes
  const hero = useMemo(() => getHeroByID(heroeId), [heroeId]);
  //a  validation if any hero is returned above
  if (!hero) {
    return <Navigate to="/" />;
  }

  // const hero = getHeroByID(heroeId);
  const { superhero, id, alter_ego, publisher, first_appearance, characters } =
    hero;

  //console.log(hero);
  return (
    <>
      <HeroContainer>
        <HeroImgDiv>
          <img alt={superhero} src={`../assets/heroes/${id}.jpg`}></img>
        </HeroImgDiv>
        <HeroInfoDiv>
          <HeroTitle>
            <h1>{superhero}</h1>
          </HeroTitle>
          <HeroInfoList>
            <HeroInfoItem>
              <b>Alter ego :</b> {alter_ego}
            </HeroInfoItem>
            <HeroInfoItem>
              <b>Publisher :</b> {publisher}
            </HeroInfoItem>
            <HeroInfoItem>
              <b> First Appearance:</b> {first_appearance}
            </HeroInfoItem>
            <HeroInfoItem>
              <b> Characters:</b> {characters}
            </HeroInfoItem>
            <ButtonReturn onClick={handleReturn}>Return</ButtonReturn>
          </HeroInfoList>
        </HeroInfoDiv>
      </HeroContainer>
    </>
  );
};

export default HeroScreen;
