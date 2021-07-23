import { combineReducers } from "redux";
import AuthReducer from './reducers/AuthReducer';

const RootReducer = combineReducers({
    // auth: AuthReducer,
    AuthReducer,
});

export default RootReducer;