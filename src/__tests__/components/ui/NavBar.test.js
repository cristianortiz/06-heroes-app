import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NavBar from "../../../components/ui/navbar/NavBar";
import { AuthContext } from "../../../auth/authContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { types } from "../../../types/types";

//this simulate the navigate() func returned when useNavigate hook is invocated
//always use mock to simulate hooks functions
const mockNavigate = jest.fn();

//mock of the entire reac-router-dom
jest.mock("react-router-dom", () => ({
  //this keeps loading RRD normally to run te other test, but allows to overwrite
  //other RDD functios to testing purpose
  ...jest.requireActual("react-router-dom"),
  //useNavigate returns navigate func so,  overwrite it to use a jest.fn() to simulate it
  useNavigate: () => mockNavigate,
}));

describe("Test on <NavBar />", () => {
  //simulate the authContext with a logged user and dispatch from Authcontext
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      username: "Goku",
    },
  };
  //set the content provider
  render(
    <AuthContext.Provider value={contextValue}>
      {/* MemoryRouter provides the context for react-router hooks like useNavigation */}
      <MemoryRouter initialEntries={["/marvel"]}>
        <NavBar />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should show the component correctly", () => {
    //screen.debug();
    expect(screen.getByText("Hello Goku")).toBeInTheDocument();
    expect(screen.getByText("Log Out").tagName).toBe("BUTTON");
  });

  test("should call the logout, navigate and dispatch and their arguments ", () => {
    //simulate the authContext with a logged user and dispatch from Authcontext
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        username: "Goku",
      },
    };
    //set the content provider
    render(
      <AuthContext.Provider value={contextValue}>
        {/* MemoryRouter provides the context for react-router hooks like useNavigation */}
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<NavBar />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //screen.debug();
    const logOutBtn = screen.getByRole("button");
    userEvent.click(logOutBtn);
    //check if the dispatch is called with correct arguments
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
      payload: { logged: false },
    });

    //test if the mockNavigate has been called with the real navigate url params in NavBar.js
    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
