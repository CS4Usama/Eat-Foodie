import './OrderNow.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function OrderNow() {
    return(
        <div className="container-fluid text-center py-5 home-cont3">
            <p className="h1 text-uppercase text-white mt-5 mb-3">Just Order and We will Deliver You</p>
            <p className="text-white mb-3">Good Food is What All You Need to be Happy!</p>
            <button type="button" className="btn btn-warning text-uppercase mb-5"> <b>Order Now</b> </button>
        </div>
    );
}