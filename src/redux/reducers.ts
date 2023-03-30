import {
  SET_USER_DETAILS,
  SET_AUTHENTICATED,
  SET_DOCUMENTS,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT,
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
      let allDocs: any = state.documents;
      let id = allDocs.length >= 1 ? allDocs[allDocs.length - 1].docId : 0;
      allDocs = [
        ...allDocs,
        { ...action.payload, docId: id + 1 },
      ];
      return {
        ...state,
        documents: allDocs,
      };
    case UPDATE_DOCUMENT:
      let updateDoc: any = state.documents;
      let index = updateDoc?.findIndex(
        (obj: any) => obj.docId === Number(action.payload.id)
      );
      updateDoc[index] = { ...action.payload.data, docId: Number(action.payload.id) };
      return {
        ...state,
        documents: updateDoc,
      };
    case DELETE_DOCUMENT:
      let removeDoc = state.documents;
      let data = removeDoc.filter((object: any) => {
        return object.docId !== Number(action.payload);
      });
      return {
        ...state,
        documents: data,
      };
    default:
      return state;
  }
};
export default userReducer;
