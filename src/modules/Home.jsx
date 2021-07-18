import HomeScreen from './homeScreen/HomeScreen';
import HomeNumberSection from './homeNumberSection/HomeNumberSection';
import HowWorks from './howWorks/HowWorks';
import OrderNow from './orderNow/OrderNow';
import FeaturedRestaurants from './featuredRestaurants/FeaturedRestaurants';

export default function Home() {
    return(
        <div>
            <HomeScreen />
            <HomeNumberSection />
            <HowWorks />
            <OrderNow />
            <FeaturedRestaurants />
        </div>
    );
}