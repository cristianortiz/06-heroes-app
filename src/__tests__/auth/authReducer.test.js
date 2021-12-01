import "@testing-library/dom";
import { AuthReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Test in authReducer", () => {
  test("should return the default state", () => {
    //call the reducer with an empty object as initial state
    const state = AuthReducer({ logged: false }, {});
    //to compare two objects use Equal
    expect(state).toEqual({ logged: false });
  });

  test("should authenticate and state the username", () => {
    //an action will be send to the reducer
    const action = {
      type: types.login,
      payload: {
        name: "Jon",
      },
    };
    const state = AuthReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: "Jon",
    });
  });

  test("should delete name from the state and set logged in false", () => {
    //the logut action will be send to the reducer
    const action = {
      type: types.logout,
    };
    //the state keeps the user name and logged true
    const state = AuthReducer({ logged: true, name: "Jon" }, action);
    //logout user must set the logged prop in false and delete the name prop
    expect(state).toEqual({
      logged: false,
    });
  });
});
