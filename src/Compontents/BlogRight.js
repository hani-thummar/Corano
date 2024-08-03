import React from 'react'
import Navigation from './Navigation'
import RightSection1 from '../pages/BlogRightSidebar/RightSection1'
import RightSection2 from '../pages/BlogRightSidebar/RightSection2'
import Footer from './Footer'
import CommentSection from '../pages/BlogRightSidebar/CommentSection'



function BlogRight() {

    
  return (
   <>
    <Navigation />
    <RightSection1 />
    <RightSection2 />
    <CommentSection />
    <Footer />
    </>
  )
}

export default BlogRight
