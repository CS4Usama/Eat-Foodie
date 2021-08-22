import { Link } from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from "../../../../components/navbar/Navbar";
import UseLogin from "./UseLogin";


export default function Login() {
    const [setEmail, setPassword, doLoginUser, passwordToogleIcon, passwordInputType] = UseLogin();

    return(
        <div>
            <div className="container-fluid register-cont1">
                <div className="">
                    <NavbarComp />
                    <div className="container register-cont1-text">
                        <h1 className="text-uppercase text-white text-center mb-4"><strong>User Login / Register</strong></h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-light">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto bg-white shadow p-5">
                    <h2 className="text-center mb-4 loginAcc">Login Your Account</h2>
                    <form onSubmit={event=>{event.preventDefault()}}>
                        <div className="form-group">
                            <label htmlFor="userLoginEmail">Email</label>
                            <input type="email" className="form-control" id="userLoginEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userLoginPassword">Password</label>
                            <span className="password-toogle-icon">{passwordToogleIcon}</span>
                            <input type={passwordInputType} className="form-control" id="userLoginPassword"
                                placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>
                        <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={doLoginUser}><b>Login Now</b></button>
                    </form>
                    <p className="m-0">Don't have an account yet?
                        <Link to='/signup'>
                            <span className="cursor-pointer text-warning"> Create an Account</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}