import { Link } from 'react-router-dom';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from "../../../../components/navbar/Navbar";
import UseSignup from "./UseSignup";


export default function Signup() {
    const [passwordToogleIcon1, passwordToogleIcon2, passwordInputType1, passwordInputType2, setEmail, setPassword, setConfirmPassword, setName, setCity, setNumber, setGender, setCountry, setProfileImage, doSignupUser] = UseSignup();

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
                <div className="col-lg-6 col-md-8 col-sm-12 mx-auto bg-white shadow p-4">
                    <h2 className="text-center mb-4 loginAcc">Create an Account</h2>
                    <form onSubmit={event=>{event.preventDefault()}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="userName">Full Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userEmail">Email</label>
                                <input type="email" className="form-control" id="userEmail" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="userPassword">Password</label>
                                <span className="password-toogle-icon-signup">{passwordToogleIcon1}</span>
                                <input type={passwordInputType1} className="form-control" id="userPassword" placeholder="Create Your Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userConfirmPassword">Confirm Password</label>
                                <span className="password-toogle-icon-signup">{passwordToogleIcon2}</span>
                                <input type={passwordInputType2} className="form-control" id="userConfirmPassword" placeholder="Confirm Your Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="userPhoneNumber">Phone Number</label>
                                <input type="number" className="form-control" id="userPhoneNumber" placeholder="Your Phone Number" onChange={(e) => setNumber(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userCountry">Country</label>
                                <input type="text" className="form-control" id="userCountry" placeholder="Your Country Name" onChange={(e) => setCountry(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="userCity">City</label>
                                <input type="text" className="form-control" id="userCity" placeholder="Your City Name" onChange={(e) => setCity(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="userGender">Gender</label>
                                <select id="userGender" className="form-control" onChange={(e) => setGender(e.target.value)}>Choose
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group col-md-5">
                                <p className="mb-2">Profile Image</p>
                                <div className="custom-file">
                                    <input type="file" accept="image/*" className="custom-file-input" id="userProfileImage" onChange={(e) => setProfileImage(e.target.value)} required />
                                    <label className="custom-file-label" htmlFor="userProfileImage">Choose Image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="userTNC" required />
                                <label className="custom-control-label" htmlFor="userTNC">Accept Terms and Conditions</label>
                            </div>
                        </div>
                        <p className="text-danger">  </p>
                        <button type="submit" className="btn btn-warning text-uppercase mb-3" onClick={doSignupUser}><b>Create an Account</b></button>
                    </form>
                    <p className="m-0">Already have an account?
                        <Link to='/login'>
                            <span className="cursor-pointer text-warning"> Login Here</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}