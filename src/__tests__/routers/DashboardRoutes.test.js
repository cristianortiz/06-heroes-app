import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import DashboardRoutes from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/authContext";

import { MemoryRouter } from "react-router";

describe("Testing in <DashboardRoutes />", () => {
  test("should show the Marvelcomponent correctly", () => {
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
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    //screen.debug();
    //the username must show in navbar inside a span tag
    expect(screen.getByText("Hello Goku").tagName).toBe("SPAN");
  });

  test("should show the DC component correctly", () => {
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
        <MemoryRouter initialEntries={["/dc"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    screen.debug();
    //the username must show in navbar inside a span tag
    expect(screen.getByText("Hello Goku").tagName).toBe("SPAN");
    //the DC Screen title must show  inside a H1 tag
    expect(screen.getByText("DC Heroes").tagName).toBe("H1");
  });
});
