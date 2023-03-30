
export const getUserDetails = (state: any) => {
    return state.usersData;
};

export const getAuthentication = (state: any) => {
    return state.authenticated;
};

export const getDocuments = (state: any) => {
    return state.documents;
};

export const getDocumentsById = (state: any, id: string) => {
    let data = [...state.documents];
    data = data.filter((item) => item.docId === Number(id));
    return !!data.length ? data : [];
};

export const getShowLoader = (state: any) => {
    return state.loaderVisible;
};

