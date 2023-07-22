const defaultState = {
    isLoading: false,
    user: {},
    users: []
}

const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";
const SET_LOADING = "SET_LOADING";

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER:
            return {...state, user: [action.payload][0]}
        case GET_USERS:
            return {...state, users: action.payload.sort((a, b) => b.points - a.points)}
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export const getUserAction = (payload) => ({type: GET_USER, payload})
export const getUsersAction = (payload) => ({type: GET_USERS, payload})
export const setLoadingAction = (payload) => ({type: SET_LOADING, payload})