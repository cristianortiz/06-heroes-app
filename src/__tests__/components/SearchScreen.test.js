import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/authContext";

import { MemoryRouter } from "react-router";
import SearchScreen from "../../components/ui/search/SearchScreen";

describe("Test in Search Screen component", () => {
  test("should  render component correctly with default values", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    //screen.debug();
    expect(screen.getByText("Search a Hero").tagName).toBe("H2");
    expect(screen.getByText("Search").tagName).toBe("BUTTON");
  });

  test("should return the 'Batmam' query results", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    //screen.debug();
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("batman");
  });

  test("should return an error if there is no query results", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=1234"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    //screen.debug();
    expect(screen.getByText("There is no results : 1234").tagName).toBe("H3");
  });
});
