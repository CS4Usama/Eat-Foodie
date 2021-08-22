import NavbarComp from '../../components/navbar/Navbar';
import LoginNavbar from '../../components/navbar/loginNavbar/LoginNavbar';
import './HomeScreen.css';
import 'bootstrap/dist/css/bootstrap.css';
import OurServicesImage from '../../assets/images/our-services.png';
import { useSelector } from "react-redux";


export default function HomeScreen() {
  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn);

  return(
    <div className="container-fluid home-cont1">
      {
        authState ?
          <LoginNavbar />
            :
          <NavbarComp />
      }
      <div className="container home-cont1-text">
        <h1 className="h1 text-uppercase text-white text-center mb-4"><strong>Wake up It's FooD o'Clock. <br/> Eat Good Feel Good</strong></h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <input type="text" className="form-control text-uppercase" id="searchText" placeholder="Search Restaurants" />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0"> <b>Search</b> </button>
            </div>
          </div>
        </div>
        <div className="container text-white text-center mt-4">
          <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
            <img src={OurServicesImage} alt="Our Services" className="our-services" draggable='false' />
          </div>
        </div>
      </div>
    </div>
  );
}