import React from 'react'
import Hero from './hero'
import Blog from './blog'
import Banner from './banner'
import NewArrivals from './newArrivals'
import CallToAction from './callToAction'
import FeaturedProduct from './featuredProduct'

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals />
      <CallToAction />
      <FeaturedProduct />
      <Blog />
    </>
  )
}

export default Home
