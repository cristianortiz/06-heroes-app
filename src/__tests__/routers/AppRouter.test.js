import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from "../../auth/authContext";

describe("Tests in <AppRouter />", () => {
  test("should show the login screen if user is logout", () => {
    //simulate the authContext
    const contextValue = {
      user: {
        logged: false,
      },
    };
    //set the content provider
    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    //see if the login screen is rendered
    screen.debug();
    //now the assertions
    //the text exists in the document
    expect(screen.getByText("Login Screen")).toBeInTheDocument();
    //the app title must be inside a h1 tag
    expect(screen.getByText("Login Screen").tagName).toBe("H1");
  });

  test("should show the Marvel componen if user is logged", () => {
    //simulate the authContext
    const contextValue = {
      user: {
        logged: true,
        username: "Goku",
      },
    };
    //set the content provider
    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    //see if the marvel screen is rendered
    screen.debug();
    //can test several assertions
    expect(screen.getByText("Marvel Heroes")).toBeInTheDocument();
    //the app title must be inside a h1 tag
    expect(screen.getByText("Marvel Heroes").tagName).toBe("H1");
    //the username must show in navbar inside a span tag
    expect(screen.getByText("Hello Goku").tagName).toBe("SPAN");
  });
});
