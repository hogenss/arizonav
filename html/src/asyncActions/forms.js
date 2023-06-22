import $api, {API_URL} from "../http";
import {getFormsAction} from "../store/formReducer";
import {setLoadingAction} from "../store/userReducer";



export const fetchForms = () => {
    return async dispatch => {
        try {
            const res = await $api.get("/forms")
            dispatch(getFormsAction(res.data))
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