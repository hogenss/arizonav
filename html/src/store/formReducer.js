const defaultState = {
    forms: []
}

const GET_FORMS = "GET_FORMS"

export const formReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FORMS:
            return {...state, forms: action.payload}
        default:
            return state
    }
}

export const getFormsAction = (payload) => ({type: GET_FORMS, payload})