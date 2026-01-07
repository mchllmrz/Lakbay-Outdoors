import Home from './Home';
import Shop from './Shop';
import About from './About';
import Navbar from "./Navbar";
import Footer from './Footer';
import StarterKit from './StarterKit';
import Cart from './Cart'; 
import { CartProvider } from './CartContext'; 
import { Routes, Route } from 'react-router-dom'; 
import Notif from './Notif';
import Checkout from './Checkout';


function App() {
  return (
    <CartProvider>
        <div className="App">
          <Navbar />
          <Cart /> 
            <Notif/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      
    </CartProvider>
  );
}

export default App;
