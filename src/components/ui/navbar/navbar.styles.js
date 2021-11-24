import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const NavBarContainer = styled.nav`
  background-color: #333044;
  //background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  //border-bottom: 1px solid #d9dee4;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: left;

  padding: 0 10px;
  box-shadow: 2px 6px 4px -4px rgba(0, 0, 0, 0.2);
`;

export const NavBarIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  color: #fff;
`;
export const NavBarItems = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

export const NavBarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
`;
export const UserDiv = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 5px 5px;
`;
export const UserSpan = styled.span`
  color: lightblue;
  text-decoration: none;
  margin-right: 10px;
`;
