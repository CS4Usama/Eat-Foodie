import { Link } from 'react-router-dom';
import './LoginNavbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import UseLoginNavbar from './UseLoginNavbar';
import {useSelector} from 'react-redux';

import image from "../../../assets/images/download.jpg";


function LoginNavbar() {
    const [doUserLogout, userName] = UseLoginNavbar();

    const store = useSelector(store => store.AuthReducer.user.name);
    console.log("store", store);

    return(
        <div>
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Navbar.Brand draggable='false'>
                    <Link className="navbarLogo" to='/'>
                        Eat foodie
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className="text-uppercase navLink" to='restaurants'>
                                Restaurants
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link className="text-uppercase navLink" to="/my-orders">
                                My Orders
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={3} className="profile-container">
                            <Link className="text-uppercase navLink" to="/profile">
                                <img src={image} alt="" className="profile-image" draggable='false' />
                                {userName}
                            </Link>
                        </Nav.Link>
                        <button type="button" className="btn btn-warning btn-sm text-uppercase mx-2 px-3" onClick={doUserLogout}>Log Out</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default LoginNavbar;