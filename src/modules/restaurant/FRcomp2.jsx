import './Restaurant.css';
// import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FRcomp2(props) {
    return(
        <div className="container res-border">
            <div className="row p-3">
                <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                    <img style={{width: "70%"}} src={props.src} alt={props.alt} />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 py-2 feat-rest">
                    <h5 className="mb-1">{props.name}</h5>
                    <p className="mb-2"> <small>{props.products}</small> </p>
                    <p>
                        <small className="rating">
                        {/* <FontAwesomeIcon icon={faStar} className="rating mr-1" /> */}
                        <ReactStars
                            count={5}
                            size={20}
                            value={props.rating}
                            isHalf={true}
                            edit={false}
                            activeColor="#ffc107"
                            />
                        </small>
                        <small className="review">{props.review}</small>
                    </p>
                    <button className="btn btn-warning btn-sm text-uppercase mx-2 px-3 py-0">
                        <Link to="restaurant-detail" className="view-menu">
                            View Menu
                        </Link>
                    </button>
                    <span className="favoriteRestaurant">
                        {/* <FontAwesomeIcon icon={faHeart} className="text-success mr-1" /> */}
                        <ReactStars
                            count={1}
                            size={20}
                            a11y={true}
                            char="❤"
                            color="#cdcdcd"
                            activeColor="#eb6825"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}