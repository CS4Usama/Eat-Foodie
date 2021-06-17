import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import $ from 'jquery'; 

export default function HomeNumberSection() {
    const [count, setCount] = useState(0);

    const inc = () => {
        
    }

    return(
        <div className="container-fluid py-2 bg-warning">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-lg-right text-md-right text-center text-white"><b className="mr-2 h5">{count}</b>Restaurants</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-center text-white"><b className="mr-2 h5">9</b>People Served</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <p className="my-3 text-lg-left text-md-left text-center text-white"><b className="mr-2 h5">44</b>Registered Users</p>
                </div>
            </div>
        </div>
    );
}