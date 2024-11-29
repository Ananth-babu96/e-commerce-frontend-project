import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Categorypage from "./pages/CategoryPage/Categorypage";
import CartPage from "./pages/CartPage/CartPage";
import PopupModal from "./components/Popup-modal/PopupModal";

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route index element={<Home />} />
               <Route
                  path="/:category/:productName/:productId"
                  element={<ProductsPage />}
               />
               <Route path="/:category" element={<Categorypage />} />
               <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
            <PopupModal text="some text" />
         </Router>
      </div>
   );
}

export default App;
