import { SET_AUTHENTICATED, SET_USER_DETAILS, SET_DOCUMENTS } from "./constants";

export function setUserDetails(data: any) {
    return {
      type: SET_USER_DETAILS,
      payload: data,
    };
}

export function setAuthenticated(data: any) {
    return {
      type: SET_AUTHENTICATED,
      payload: data,
    };
}

export function setDocuments(data: any) {
  return {
    type: SET_DOCUMENTS,
    payload: data,
  };
}