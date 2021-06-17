import './App.css';
import HomeScreen from './modules/homeScreen/HomeScreen';
import Footer from "./components/footer/Footer";
import HomeNumberSection from './modules/HomeNumberSection';

function App() {
  return (
    <div>
      <HomeScreen />
      <HomeNumberSection />

      
      <Footer />

    </div>
  );
}

export default App;