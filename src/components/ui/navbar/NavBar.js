import React from "react";
import { FaBars } from "react-icons/fa";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarItems,
  NavBarLink,
} from "./navbar.styles";

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarIcon to="#">
          <FaBars />
        </NavBarIcon>
        <NavBarItems>
          <NavBarLink exact="true" to="/marvel">
            Marvel
          </NavBarLink>
          <NavBarLink exact="true" to="/dc">
            DC
          </NavBarLink>
          <NavBarLink exact="true" to="/search">
            Search
          </NavBarLink>
          <NavBarLink exact="true" to="/login">
            Log Out
          </NavBarLink>
        </NavBarItems>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
