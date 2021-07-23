import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CustomPublicRoute from "./CustomPublicRoute";
import Home from '../modules/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import Footer from '../components/footer/Footer';
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

                <Route path='/signup'>
                    <Signup />
                </Route>

            </Switch>

            <Footer />
        </Router>
    );
}