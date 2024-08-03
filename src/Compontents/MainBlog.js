import React from 'react'
import Navigation from './Navigation'
import BlogSection1 from '../pages/MainBlog/BlogSection1'
import MainPart from '../pages/MainBlog/MainPart'
import Footer from './Footer'

function MainBlog() {
  return (
    <div>
      <Navigation />
      <BlogSection1 />
      <MainPart />
      <Footer /> 
    </div>
  )
}

export default MainBlog
