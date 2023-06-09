import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userDataReducer from "./userDataReducder";

const reducers = combineReducers({
    isLogin: loginReducer,
    userData: userDataReducer
})

export default reducers;