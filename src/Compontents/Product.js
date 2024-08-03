import React from 'react'
import Navigation from './Navigation'
import ProductSection1 from '../pages/ProductDetails/ProductSection1'
import MainProductpart from '../pages/ProductDetails/MainProductpart'
import Related from '../pages/ProductDetails/Related'
import Footer from './Footer'

function Product() {
  return (
    <div>
      <Navigation />
      <ProductSection1 />
      <MainProductpart />
      <Related />
      <Footer />
    </div>
  )
}

export default Product
