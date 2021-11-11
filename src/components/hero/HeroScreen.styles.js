import styled from "@emotion/styled/";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  background: #f8f8fa;
  padding: 20px;
`;
export const HeroTitle = styled.div`
  display: block;
  width: 100%;
  height: 30px;
  padding-left: 20px;
  color: #6c757d;
  font-size: 0.9em;
`;

export const HeroImgDiv = styled.div`
  display: block;

  color: #6c757d;
  font-size: 0.9em;
  //border: 1px solid black;
`;
export const HeroInfoDiv = styled.div`
  display: block;
  //border: 1px solid blue;
`;

export const HeroInfoList = styled.div`
  display: block;
  padding: 20px;
`;
export const HeroInfoItem = styled.li`
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #6c757d;
`;

export const ButtonReturn = styled.button`
  margin-top: 10px;
  padding: 5px;
  width: 70%;
  border-radius: 6px;
  border: 2px solid #2b1ee9f7;
  background-color: #9bc0ed;
  cursor: pointer;
  color: #fff;
`;
