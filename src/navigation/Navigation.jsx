import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CustomPublicRoute from "./CustomPublicRoute";
import Home from '../modules/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import Footer from '../components/footer/Footer';
import RegisterRestaurant from "../modules/registerRestaurant/RegisterRestaurant";
import Restaurant from "../modules/restaurant/Restaurant";
import RestaurantDetail from "../modules/restaurantDetail/RestaurantDetail";
import MyOrder from "../modules/MyOrder";
import { useSelector } from "react-redux";

export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn);

    return(
        <Router>
            
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <CustomPublicRoute path='/login' auth={authState}>
                    <Login />
                </CustomPublicRoute>

                <CustomPublicRoute path='/signup' auth={authState}>
                    <Signup />
                </CustomPublicRoute>

                <Route exact path='/register-restaurant'>
                    <RegisterRestaurant />
                </Route>

                <PrivateRoute exact path='/restaurants' auth={authState}>
                    <Restaurant />
                </PrivateRoute>

                <Route exact path='/restaurant-detail'>
                    <RestaurantDetail />
                </Route>

                <Route exact path='/my-orders'>
                    <MyOrder />
                </Route>

            </Switch>

            <Footer />
        </Router>
    );
}