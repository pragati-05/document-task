import { SET_AUTHENTICATED, SET_USER_DETAILS } from "./constants";

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