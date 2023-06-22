import $api from "../http";
import {getUserAction, getUsersAction, setAuthAction} from "../store/userReducer";


export const fetchUsers = () => {
    return dispatch => {
        $api.get("/users")
            .then(res => dispatch(getUsersAction(res.data)))
    }
}

export const fetchUser = () => {
    return dispatch => {
        // const user = useSelector(state => state.users.user)

        try {
            $api.get("/user")
                .then(res => dispatch(getUserAction(res.data)))
                .then(dispatch(setAuthAction(true)))
        } catch(err) {
            console.log("DASDASDQ RFWERFSD DSFSDF")
            dispatch(setAuthAction(false))
        }
    }
}