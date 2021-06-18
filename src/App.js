import './App.css';
import HomeScreen from './modules/homeScreen/HomeScreen';
import HomeNumberSection from './modules/homeNumberSection/HomeNumberSection';
import HowWorks from './modules/howWorks/HowWorks';
import OrderNow from './modules/orderNow/OrderNow';
import FeaturedRestaurants from './modules/featuredRestaurants/FeaturedRestaurants';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <HomeScreen />
      <HomeNumberSection />
      <HowWorks />
      <OrderNow />
      <FeaturedRestaurants />
      <Footer />

    </div>
  );
}

export default App;