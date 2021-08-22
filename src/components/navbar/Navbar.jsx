import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComp(props) {
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
                            <Link className="text-uppercase navLink" to="/login">
                                Login / Register
                            </Link>
                        </Nav.Link>
                        <Link to="/register-restaurant" className="">
                            <button type="button" className="btn nbRegRes btn-warning btn-sm text-uppercase mx-2 px-3 py-0">
                                Register Restaurant
                            </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;