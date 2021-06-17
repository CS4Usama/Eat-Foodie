import NavbarComp from '../../components/navbar/Navbar';
import './HomeScreen.css';
import 'bootstrap/dist/css/bootstrap.css';
import OurServicesImage from '../../assets/images/our-services.png';

export default function HomeScreen() {
    return(
      <div className="container-fluid home-cont1">
          <NavbarComp />
          <div className="container home-cont1-text">
            <h1 className="h1 text-uppercase text-white text-center mb-4"><strong>Food doesn't have a Religion. <br /> It's a Religion</strong></h1>
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
                <img style={{ width: "95%" }} draggable='false' alt="Our Services" src={OurServicesImage} />
              </div>
            </div>
          </div>
      </div>
    );
}