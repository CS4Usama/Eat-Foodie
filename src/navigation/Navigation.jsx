import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CustomPublicRoute from "./CustomPublicRoute";
import Home from '../modules/Home';
import Login from '../modules/auth/userAuth/login/Login';
import Signup from '../modules/auth/userAuth/signup/Signup';
import Footer from '../components/footer/Footer';
import RegisterRestaurant from "../modules/auth/restaurantAuth/registerRestaurant/RegisterRestaurant";
import RestaurantLogin from "../modules/auth/restaurantAuth/restaurantLogin/RestaurantLogin";
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

                <CustomPublicRoute path='/login-restaurant' auth={authState}>
                    <RestaurantLogin />
                </CustomPublicRoute>

            </Switch>

            <Footer />
        </Router>
    );
}