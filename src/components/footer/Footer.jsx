import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        // Complete Footer Section
        <div className="container-fluid pt-5 bg-footer">
            <div className="container mb-3">
                <div className="row">

                    {/* Popular Cities Section */}
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-head-div">
                            <h5 className="text-white">Popular Cities</h5>
                        </div>
                        <div className="footer-list-div">
                            <ul>
                                <li><a href="/">Gojra</a></li>
                                <li><a href="/">Faisalabad</a></li>
                                <li><a href="/">Islamabad</a></li>
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
                            <ul className="">
                                <li className="pb-1">
                                    <span className="bg-warning p-2 rounded mr-2">
                                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                                    </span>
                                    <span>+92 307 7504927</span>
                                </li>
                                <li className="pb-3" style={{display:'flex', alignItems:'center'}}>
                                    <span className="bg-warning p-2 rounded mr-2" style={{float:'left'}}>
                                        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                                    </span>
                                    <span className="gMail">
                                        <a href="mailto:cs.cybernetic@gmail.com" target="_blank" rel="noreferrer">cs.cybernetic@gmail.com</a>
                                    </span>
                                </li>
                                <li style={{textAlign:'center'}}>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <a href="https://www.linkedin.com/in/CS4Usama" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faLinkedin} size='lg' className="text-white linkedIn" />
                                        </a>
                                    </span>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <a href="https://github.com/CS4Usama" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGithub} size='lg' className="text-white gitHub" />
                                        </a>
                                    </span>
                                    <span className="bg-warning p-2 rounded">
                                        <a href="https://www.facebook.com/CS4Usama" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faFacebook} size='lg' className="text-white facebook" />
                                        </a>
                                    </span>
                                </li>
                                <li style={{textAlign:'center'}} className="mt-4">
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <a href="https://www.instagram.com/CS4Usama" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faInstagram} size='lg' className="text-white instagram" />
                                        </a>
                                    </span>
                                    <span className="bg-warning p-2 rounded mr-3">
                                        <a href="https://twitter.com/CS4Usama" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faTwitter} size='lg' className="text-white twitter" />
                                        </a>
                                    </span>
                                    <span className="bg-warning p-2 rounded">
                                        <a href="https://www.youtube.com/channel/UCzIiHbpMfqfMrmN9JcJ8vsQ" target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faYoutube} size='lg' className="text-white youtube" />
                                        </a>
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
                    <p>© 2021 Eat Foodie. All Rights Reserved. Powered By &nbsp;
                        <a href="https://github.com/CS4Usama" target="_blank" rel="noreferrer" className="footer-github">Cyber Hawk</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;