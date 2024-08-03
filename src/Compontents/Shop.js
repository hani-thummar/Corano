import React from 'react'
import ShopSection1 from '../pages/Shop/ShopSection1';
import Navigation from './Navigation';
import Categories from '../pages/Shop/Categories';
import Footer from './Footer';

function Shop() {
  return (
    <div>
      <Navigation/>
      <ShopSection1 />
      <Categories />
      <Footer />
    </div>
  )
}

export default Shop;
