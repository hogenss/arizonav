import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReduser} from "./userReducer";
import {formReduser} from "./formReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    users: userReduser,
    forms: formReduser
})

export const store = new createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))