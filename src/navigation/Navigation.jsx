import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../modules/Home';
import Login from '../modules/login/Login';
import UserRegistration from '../modules/userRegistration/UserRegistration';
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
                    <UserRegistration />
                </Route>

            </Switch>

            <Footer />
        </Router>
    );
}