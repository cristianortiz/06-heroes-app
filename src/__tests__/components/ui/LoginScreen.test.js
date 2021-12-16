import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { types } from "../../../types/types";
import LoginScreen from "../../../components/ui/login/LoginScreen";
import { AuthContext } from "../../../auth/authContext";
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

describe("Test in <LoginScreen />", () => {
  //simulate the authContext with a logged user and dispatch from Authcontext
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test("should show the component correclty", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        {/* MemoryRouter provides the context for react-router hooks like useNavigation */}
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Login Screen").tagName).toBe("H1");
  });

  test("should call the dispatch and navigate with te correct arguments", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        {/* MemoryRouter provides the context for react-router hooks like useNavigation */}
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const user = {
      username: "Jon",
      logged: true,
    };
    const loginBtn = screen.getByRole("button");
    userEvent.click(loginBtn);
    //check if the dispatch is called with correct arguments
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { username: user.username },
    });

    //test if the mockNavigate has been called with the real navigate url params in LoginScreen
    expect(mockNavigate).toHaveBeenCalledWith("/marvel", { replace: true });
    //test if locaStorage last path is set and navigate() redirect to lastPath
    localStorage.setItem("lastPath", "/dc");
    userEvent.click(loginBtn);
    expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
  });
});
