import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return (
        // Complete Footer Section
        <div className="container-fluid pt-5 bg-footer">
            <div className="container mb-4">
                <div className="row">

                    {/* Popular Cities Section */}
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-head-div">
                            <h5 className="text-white">Popular Cities</h5>
                        </div>
                        <div className="footer-list-div">
                            <ul>
                                <li><a href="/">Islamabad</a></li>
                                <li><a href="/">Gojra</a></li>
                                <li><a href="/">Faisalabad</a></li>
                                <li><a href="/">Lahore</a></li>
                                <li><a href="/">Karachi</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Popular Cuisnies Section */}
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-head-div">
                            <h5 className="text-white">Popular Cuisnies</h5>
                        </div>
                        <div className="footer-list-div">
                            <ul>
                                <li><a href="/">Mango Shake</a></li>
                                <li><a href="/">BB.Q</a></li>
                                <li><a href="/">Biryani</a></li>
                                <li><a href="/">Chicken Roast</a></li>
                                <li><a href="/">Fish Fry</a></li>
                                <li><a href="/">Steam Roast</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Menu (Sub-Pages) Section */}
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-head-div">
                            <h5 className="text-white">Menu</h5>
                        </div>
                        <div className="footer-list-div">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">FAQ's</a></li>
                                <li><a href="/">How it works</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Connect Section */}
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-head-div">
                            <h5 className="text-white">Connect</h5>
                        </div>
                        <div className="footer-list-div">
                            <ul>
                                <li className="pb-3">
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                                    </span>
                                    <span>+92 307 7504927</span>
                                </li>
                                <li className="pb-3">
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                                    </span>
                                    <a href="mailto:cs.cybernetic@gmail.com" target="_blank" rel="noreferrer">cs.cybernetic@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/usama-cs" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                                    </a>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faGithub} className="text-white" />
                                    </span>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faFacebook} className="text-white" />
                                    </span>
                                </li>
                                <li style={{textAlign:'center'}}>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faInstagram} className="text-white" />
                                    </span>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                    </span>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <FontAwesomeIcon icon={faYoutube} className="text-white" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Copyright Section */}
            <div className="container">
                <div className="col-12 footer-copyright">
                    <p>© 2021 Eat Foodie. All Rights Reserved. Powered By <span style={{ color: "#eb6825", fontWeight: 700 }}>Cyber Hawk</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;