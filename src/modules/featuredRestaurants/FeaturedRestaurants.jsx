import FeatureRestaurant1 from '../../assets/images/feature-restaurant-1.png';
import FeatureRestaurant2 from '../../assets/images/feature-restaurant-2.png';
import FeatureRestaurant3 from '../../assets/images/feature-restaurant-3.png';
import FeatureRestaurant4 from '../../assets/images/feature-restaurant-4.png';
import FeatureRestaurant5 from '../../assets/images/feature-restaurant-5.png';
import FeatureRestaurant6 from '../../assets/images/feature-restaurant-6.png';
import FRcomp from './FRcomp';

export default function FeaturedRestaurants() {
    return(
        <div className="container-fluid py-5">
            <div className="pt-2 pb-4">
                <h2 className="h2 text-uppercase text-center">Featured Restaurants</h2>
                <p className="text-center">Enjoy Life with Our Delicious Foods.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant1} alt="Natural Healthy Food" name="Natural Healthy Food" products="Cheese Burger, Apple Juice, Beef Roast" rating="3.5" review="(20) Reviews" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant2} alt="Menu &amp; Drinks" name="Menu &amp; Drinks" products="Cold Coffee, Chicken Roast, Chinese Soup" rating="4" review="(28) Reviews" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant3} alt="Chefs" name="Chefs" products="Noodles, Egg Fry, Pastry" rating="5" review="(14) Reviews" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant4} alt="Menu's" name="Menu's" products="Fish Fry, Biryani, Fresh Juices" rating="3" review="(29) Reviews" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant5} alt="Food N&amp;H" name="Food N&amp;H" products="Beef Roast, Doughnut, Cheese Burger" rating="4" review="(35) Reviews" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <FRcomp src={FeatureRestaurant6} alt="Restaurant" name="Restaurant" products="Apple Juice, BB.Q" rating="4.5" review="(31) Reviews" />
                    </div>
                </div>
            </div>
        </div>
    );
}