//  const state ={
//      username:'jon',
//      logged:true
//  }

import { types } from "../types/types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        //equals to ...state, username:action.payload
        ...action.payload, //add the authenticated user data to state
        logged: true,
      };
    case types.logout:
      //return only the logged prop as false, username is dropped
      return {
        logged: false,
      };

    default:
      return state;
  }
};
