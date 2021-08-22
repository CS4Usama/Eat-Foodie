import { Link } from 'react-router-dom';
import './RestaurantLogin.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from "../../../../components/navbar/Navbar";
import UseLogin from "./UseRestaurantLogin";


export default function RestaurantLogin() {
    const [setEmail, setPassword, doLoginUser, passwordToogleIcon, passwordInputType] = UseLogin();

    return(
        <div>
            <div className="container-fluid register-cont1">
                <div className="">
                    <NavbarComp />
                    <div className="container register-cont1-text">
                        <h1 className="text-uppercase text-white text-center mb-4"><strong>Restaurant Login / Register</strong></h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-light">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto bg-white shadow p-5">
                    <h2 className="text-center mb-4 loginAcc">Login Your Account</h2>
                    <form onSubmit={event=>{event.preventDefault()}}>
                        <div className="form-group">
                            <label htmlFor="resLoginEmail">Email</label>
                            <input type="email" className="form-control" id="resLoginEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resLoginPassword">Password</label>
                            <span className="password-toogle-icon">{passwordToogleIcon}</span>
                            <input type={passwordInputType} className="form-control" id="resLoginPassword"
                                placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>
                        <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={doLoginUser}><b>Login Now</b></button>
                    </form>
                    <p className="m-0">Don't have an account yet?
                        <Link to='/register-restaurant'>
                            <span className="cursor-pointer text-warning"> Create an Account</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}