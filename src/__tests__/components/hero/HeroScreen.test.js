import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import HeroScreen from "../../../components/hero/HeroScreen";

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

describe("Tests in HeroScreen", () => {
  test("should not show HeroScreen if there is no heroe in URL", () => {
    render(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          {/* this is fake route to test purpose, if HeroScreen is loaded with any hero in url
                    should load this */}
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    //screen.debug();
    expect(screen.getByText("No hero page").tagName).toBe("H1");
  });
  test("should show a hero if 'hero' parameter exists and is founded through getHeroById func", () => {
    render(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    //screen.debug();
    expect(screen.getByText("Spider Man")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should return to previous page when return button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    //screen.debug();

    const returnBtn = screen.getByRole("button");
    userEvent.click(returnBtn);
    //expect mockNavigate
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
