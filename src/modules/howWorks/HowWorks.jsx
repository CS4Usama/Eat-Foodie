import RestaurantImage from '../../assets/images/how1-restaurant.png';
import DishImage from '../../assets/images/how2-tasty-dish.png';
import TruckImage from '../../assets/images/how3-delivery.png';
import HWcomp from './HWcomp';

export default function HowWorks() {
    return(
        <div className="container-fluid text-center py-4">
            <div className="pt-3">
                <h2 className="h2 text-uppercase">How It Works</h2>
                <p>We deliver food with quality at your doorstep.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 px-5">
                        <HWcomp src={RestaurantImage} alt="Choose A Restaurant" heading="Choose A Restaurant" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga enim cum explicabo consequatur saepe." />
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 px-5">
                        <HWcomp src={TruckImage} alt="Pick Up or Delivery" heading="Pick Up or Delivery" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga enim cs saepe." />
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 px-5">
                        <HWcomp src={DishImage} alt="Choose A Tasty Dish" heading="Choose A Tasty Dish" text="Lorem ipsum dolor sit amet, consectetur elit. Fuga enim cum explicabo consequatur." />
                    </div>
                </div>
            </div>
        </div>
    );
}