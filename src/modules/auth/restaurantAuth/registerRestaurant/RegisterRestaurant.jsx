import { Link } from 'react-router-dom';
import './RegisterRestaurant.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from "../../../../components/navbar/Navbar";
import UseRegisterRestaurant from "./UseRegisterRestaurant";


export default function RegisterRestaurant() {
    const [passwordToogleIcon1, passwordToogleIcon2, passwordInputType1, passwordInputType2, setEmail, setPassword, setConfirmPassword, setName, setCity, setCountry, setProfileImage, doSignupres] = UseRegisterRestaurant();

    return(
        <div>
            <div className="container-fluid register-cont1">
                <div className="">
                    <NavbarComp />
                    <div className="container register-cont1-text">
                        <h1 className="text-uppercase text-white text-center mb-4"><strong>Restaruant Login / Register</strong></h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-light">
                <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
                    <h2 className="text-center mb-4 loginAcc">Create an Account</h2>
                    <form onSubmit={event=>{event.preventDefault()}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="resName">Restaurant Name</label>
                                <input type="text" className="form-control" id="resName" placeholder="Enter Restaurant Name" onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="resEmail">Email</label>
                                <input type="email" className="form-control" id="resEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="resPassword">Password</label>
                                <span className="password-toogle-icon-signup">{passwordToogleIcon1}</span>
                                <input type={passwordInputType1} className="form-control" id="resPassword" placeholder="Create Your Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="resConfirmPassword">Confirm Password</label>
                                <span className="password-toogle-icon-signup">{passwordToogleIcon2}</span>
                                <input type={passwordInputType2} className="form-control" id="resConfirmPassword" placeholder="Confirm Your Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="resCity">City</label>
                                <input type="text" className="form-control" id="resCity" placeholder="Your City Name" onChange={(e) => setCity(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="resCountry">Country</label>
                                <input type="text" className="form-control" id="resCountry" placeholder="Your Country Name" onChange={(e) => setCountry(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-7">
                                <label htmlFor="resDishes">Dishes</label>
                                <input type="text" className="form-control" id="resDishes" placeholder="Add Your Dishes" onChange={(e) => setCountry(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-5">
                                <p className="mb-2">Profile Image</p>
                                <div className="custom-file">
                                    <input type="file" accept="image/*" className="custom-file-input" id="resProfileImage" onChange={(e) => setProfileImage(e.target.value)} required />
                                    <label className="custom-file-label" htmlFor="resProfileImage">Choose Image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="resTNC" required />
                                <label className="custom-control-label" htmlFor="resTNC">Accept Terms and Conditions</label>
                            </div>
                        </div>
                        <p className="text-danger">  </p>
                        <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={doSignupres}><b>Create an Account</b></button>
                    </form>
                    <p className="m-0">Already have an account?
                        <Link to='/login-restaurant'>
                            <span className="cursor-pointer text-warning"> Login Here</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}