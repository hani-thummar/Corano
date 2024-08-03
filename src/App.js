import { Slider } from '@mui/material';
import Navigation from './Compontents/Navigation';
// import Section from './pages/Home/Section';
// import Parts from './pages/Home/Parts';
// import Products from './pages/Home/Products';
// import Cards from './pages/Home/Cards';
// import Jwellary from './pages/Home/Jwellary';
// import Fproduct from './pages/Home/Fproduct';
// import Testi from './pages/Home/Testi';
// import Wedding from './pages/Home/Wedding';
// import Blog from './pages/Home/Blog';
// import Brandlogo from './pages/Home/Brandlogo';
// import Footer from './Compontents/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Compontents/Home';
import Shop from './Compontents/Shop';
import MainBlog from './Compontents/MainBlog';
import Contact from './Compontents/Contact';
import UserForm from './Compontents/UserForm';
import Heart from './Compontents/Heart';
import Cart from './Compontents/Cart';
import Product from './Compontents/Product';
import BlogRight from './Compontents/BlogRight';

function App() {
  return (
    <>
      {/* <Navigation />  */}
      {/* <Section />  */}
      {/* <Parts /> */}
      {/* <Products /> */}
      {/* <Cards /> */}
      {/* <Jwellary /> */}
      {/* <Fproduct /> */}
      {/* <Testi /> */}
      {/* <Wedding /> */}
      {/* <Blog /> */}
      {/* <Brandlogo /> */}
      {/* <Footer /> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<MainBlog/>}/>
        <Route path='/contactus' element={<Contact />}/>
        <Route path='/user' element={<UserForm />}/>
        <Route path='/heart' element={<Heart />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/blogright' element={<BlogRight />}/>
      </Routes>
    </>
    
  );
}

export default App;
