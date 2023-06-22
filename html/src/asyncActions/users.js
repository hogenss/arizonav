import $api, {API_URL} from "../http";
import {getUserAction, getUsersAction, setLoadingAction} from "../store/userReducer";


export const fetchUsers = () => {
    return async dispatch => {
        try {
            const res = await $api.get("/users")
            dispatch(getUsersAction(res.data))
            dispatch(setLoadingAction(false))
        } catch (e) {
            console.log(e.response?.data?.message);
            if (e.response.status === 401) {
                dispatch(setLoadingAction(true))
                window.location.href = `${API_URL}/discord`
            }
        }
    }
}

export const fetchUser = () => {
    return async dispatch => {
        try {
            const response = await $api.get("/user", {withCredentials: true})
            dispatch(getUserAction(response.data))
            dispatch(setLoadingAction(false))
        } catch(err) {
            console.log(err.response?.data?.message);
            if (err.response.status === 401) {
                dispatch(setLoadingAction(true))
                window.location.href = `${API_URL}/discord`
            }
        }
    }
}