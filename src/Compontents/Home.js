
import React from 'react'
import Navigation from '../Compontents/Navigation'
import Section from '../pages/Home/Section'
import Parts from '../pages/Home/Parts'
import Products from '../pages/Home/Products'
import Cards from '../pages/Home/Cards'
import Jwellary from '../pages/Home/Jwellary'
import Fproduct from '../pages/Home/Fproduct'
import Testi from '../pages/Home/Testi'
import Wedding from '../pages/Home/Wedding'
import Blog from '../pages/Home/Blog'
import Brandlogo from '../pages/Home/Brandlogo'
import Footer from '../Compontents/Footer'

function Home() {
  return (
    <div>
      <Navigation />
      <Section />
      <Parts />
      <Products />
      <Cards />
      <Jwellary />
      <Fproduct />
      <Testi />
      <Wedding />
      <Blog />
      <Brandlogo />
      <Footer />
    </div>
  )
}

export default Home
