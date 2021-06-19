import './UserRegistration.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComp from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function UserRegistration() {
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
                                <label htmlFor="userFullName">Full Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter Your Full Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userEmail">Email</label>
                                <input type="email" className="form-control" id="userEmail" placeholder="Enter Your Email" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" placeholder="Enter Your Password" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userConfirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="userConfirmPassword" placeholder="Confirm Your Password" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="userCity">City</label>
                                <input type="text" className="form-control" id="userCity" placeholder="Your City Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userCountry">Country</label>
                                <input type="text" className="form-control" id="userCountry" placeholder="Your Country Name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="userGender">Gender</label>
                                <select id="userGender" className="form-control">
                                    <option defaultValue>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="userAge">Age</label>
                                <input type="number" className="form-control" id="userAge" required />
                            </div>
                            <div className="form-group col-md-6">
                                <p className="mb-2">Profile Image</p>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="userProfileImage" />
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
                        <button type="submit" className="btn btn-warning text-uppercase mb-3"><b>Create an Account</b></button>
                    </form>
                    <p className="m-0">Already have an account? <span className="cursor-pointer text-warning">Login Here</span> </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}