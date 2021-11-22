import styled from "@emotion/styled/";
import "animate.css";

export const HeroSearch = styled.div`
  display: block;
  color: #6c757d;
  font-size: 0.9em;
  margin-bottom: 20px;
`;
export const SearchForm = styled.form`
  display: flex;
  width: 100%;
`;
export const HeroSearchResults = styled.div`
  display: block;
  width: 100%;
  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
`;
export const InputForm = styled.input`
  display: inline-block;
  padding: 5px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
`;
export const FormButton = styled.button`
  display: inline-block;
  margin-top: 10px;
  padding: 5px;
  width: 15%;
  border-radius: 6px;
  border: 1px solid #2b1ee9f7;
  background-color: #9bc0ed;
  cursor: pointer;
  color: #fff;
`;
