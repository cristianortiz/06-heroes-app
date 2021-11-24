import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarItems,
  NavBarLink,
  UserSpan,
  UserDiv,
} from "./navbar.styles";

const NavBar = () => {
  const authC = useContext(AuthContext);
  const { user, dispatch } = authC;
  const navigate = useNavigate();

  const handleLogout = () => {
    const action = {
      type: types.logout,
      payload: { logged: false },
    };
    dispatch(action);
    //if you want to use the replace
    navigate("/login", { replace: true });
  };

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
          <UserDiv>
            <UserSpan>Hello {user.username} </UserSpan>
            <NavBarLink exact to="/login" onClick={handleLogout}>
              Log Out
            </NavBarLink>
          </UserDiv>
        </NavBarItems>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
