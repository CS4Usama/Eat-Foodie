import { combineReducers } from "redux";
import AuthReducer from './reducers/AuthReducer';
import RestaurantReducer from './reducers/RestaurantReducer';

const RootReducer = combineReducers({
    // auth: AuthReducer,
    AuthReducer,
    RestaurantReducer,
});

export default RootReducer;