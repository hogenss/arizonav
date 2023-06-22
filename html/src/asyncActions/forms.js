import $api from "../http";
import {getFormsAction} from "../store/formReducer";



export const fetchForms = () => {
    return dispatch => {
        $api.get("/forms")
            .then(res => dispatch(getFormsAction(res.data)))
    }
}