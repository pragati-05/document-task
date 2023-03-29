import {
  SET_USER_DETAILS,
  SET_AUTHENTICATED,
  SET_DOCUMENTS,
} from "./constants";

const initialState = {
  usersData: null,
  authenticated: false,
  documents: [],
};
const userReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        usersData: action.payload,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    case SET_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
