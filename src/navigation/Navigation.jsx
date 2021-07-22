import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../modules/Home';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import Footer from "../components/footer/Footer";

export default function Navigation() {
    return(
        <Router>
            
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/signup'>
                    <Signup />
                </Route>

            </Switch>

            <Footer />
        </Router>
    );
}