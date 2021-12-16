import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../../components/ui/search/SearchScreen";
import userEvent from "@testing-library/user-event";

//this simulate the navigate() func returned when useNavigate hook is invoked
//always use mock to simulate hooks functions
const mockNavigate = jest.fn();

//mock of the entire reac-router-dom
jest.mock("react-router-dom", () => ({
  //this keeps loading RRD normally to run te other test, but allows to overwrite
  //other RDD functions to testing purpose
  ...jest.requireActual("react-router-dom"),
  //useNavigate returns navigate func so,  overwrite it to use a jest.fn() to simulate it
  useNavigate: () => mockNavigate,
}));

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

  test("should call search results on form submit", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    const inputValue = "batman";
    userEvent.type(input, inputValue);
    //screen.debug();
    const submit = screen.getByRole("button");
    userEvent.click(submit);
    //just ensures that the form has the input value
    expect(screen.getByRole("form")).toHaveFormValues({
      searchText: inputValue,
    });

    //test if the mockNavigate has been called with the real navigate url param
    expect(mockNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
