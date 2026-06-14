import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Products/GenderCollectionSection'
import NewArrivals from '../Components/Products/NewArrivals'
import ProductDetails from '../Components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <GenderCollectionSection></GenderCollectionSection>
        <NewArrivals></NewArrivals>

        {/* Best Sellers */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best-Sellers</h2>
        <ProductDetails></ProductDetails>
    </div>
  )
}

export default Home