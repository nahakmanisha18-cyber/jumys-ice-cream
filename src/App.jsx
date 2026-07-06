import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/Product';
import Blogs from './Pages/Blog';
import Blogdetails from './Pages/BlogDitails';
import About from './Pages/About';
import NotFound from './Pages/404 Error/404';
import Faq from './Pages/Faq/Faq';
import BottomNav from './Components/Common/BottomNav/BottomNav';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Account from './Pages/Account';
import Wishlist from './Pages/WishList';
import Cart from './Pages/Cart';
import "./App.css"


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blogdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />




        {/* 404 hamesha last mein hona chahiye */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <BottomNav /> </>
  );
}

export default App;