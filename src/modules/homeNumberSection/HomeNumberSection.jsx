import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';

export default function HomeNumberSection() {
    return(
        <div className="container-fluid py-2 bg-warning">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-lg-right text-md-right text-center text-white">
                        <b className="mr-2 h5">
                            <Counter end={15} duration={3} />
                        </b>
                        Restaurants
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-center text-white">
                        <b className="mr-2 h5">
                            <Counter end={20} duration={4} />
                        </b>
                        People Served
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-lg-left text-md-left text-center text-white">
                        <b className="mr-2 h5">
                            <Counter end={83} duration={5} />
                        </b>
                        Registered Users
                    </p>
                </div>
            </div>
        </div>
    );
}