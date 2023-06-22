const defaultState = {
    iaAuth: false,
    user: {},
    users: []
}

const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";
const SET_AUTH = "SET_AUTH";

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER:
            return {...state, user: [action.payload][0]}
        case GET_USERS:
            return {...state, users: action.payload}
        case SET_AUTH:
            return {...state, iaAuth: action.payload}
        default:
            return state
    }
}

export const getUserAction = (payload) => ({type: GET_USER, payload})
export const getUsersAction = (payload) => ({type: GET_USERS, payload})
export const setAuthAction = (payload) => ({type: SET_AUTH, payload})