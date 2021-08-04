import HomeScreen from './homeScreen/HomeScreen';
import HomeNumberSection from './homeNumberSection/HomeNumberSection';
import HowWorks from './howWorks/HowWorks';
import OrderNow from './orderNow/OrderNow';
import FeaturedRestaurants from './featuredRestaurants/FeaturedRestaurants';
// import Restaurant from './restaurant/Restaurant';
// import RestaurantDetail from './restaurantDetail/RestaurantDetail';
// import MyOrder from './MyOrder';


export default function Home() {
    return(
        <div>
            <HomeScreen />
            <HomeNumberSection />
            <HowWorks />
            <OrderNow />
            <FeaturedRestaurants />

            {/* <Restaurant /> */}
            {/* <RestaurantDetail /> */}
            {/* <MyOrder /> */}
        </div>
    );
}