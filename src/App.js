import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';
import Delivery from './components/delivery/Delivery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import WmWatches from './components/women/WmWatches';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Delivery></Delivery>
      <Products></Products>
      <WmWatches></WmWatches>
      <About></About>
      
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
