import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

//this simulate the navigate() func returned when useNavigate hook is invocated
//always use mock to simulate hooks functions
const mockNavigate = jest.fn();
//mock of the entire reac-router-dom
jest.mock("react-router-dom", () => ({
  //this keeps loading RRD normally to run te other test, but allows to overwrite
  //other RDD functios to testing purpose
  ...jest.requireActual("react-router-dom"),
  //Navigate is component variant of useNavigate,  overwrite it to use a jest.fn() to simulate it
  Navigate: () => <span>You Go to Login</span>,
}));

describe("Tests in <PrivateRoutes />", () => {
  //mock the localStorage
  Storage.prototype.setItem = jest.fn();
  test("should show the component if the user is authenticated and save in the locaStorage", () => {
    //simulate the authContext with a logged user
    const contextValue = {
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
          <PrivateRoute>
            {/* PrivateRoute HO component, receives and render childs components, can be anything */}
            <h1>Testing PrivateRoute</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //screen.debug();
    expect(screen.getByText("Testing PrivateRoute").tagName).toBe("H1");
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });

  test("should render login component if user is not authenticated", () => {
    //simulate the authContext with a logged user
    const contextValue = {
      user: {
        logged: false,
      },
    };

    //set the content provider
    render(
      <AuthContext.Provider value={contextValue}>
        {/* MemoryRouter provides the context for react-router hooks like useNavigation */}
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            {/* PrivateRoute HO component, receives and render childs components, can be anything */}
            <h1>Testing PrivateRoute</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //screen.debug();
    expect(screen.getByText("You Go to Login").tagName).toBe("SPAN");
  });
});
