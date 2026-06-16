import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Products/GenderCollectionSection'
import NewArrivals from '../Components/Products/NewArrivals'
import ProductDetails from '../Components/Products/ProductDetails'
import ProductGrid from '../Components/Products/ProductGrid'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeaturesSection from '../Components/Products/FeaturesSection'


const placeholderProducts = [
  {
    _id: 1,
    name: 'Product 1',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=3'}]
  },
  {
    _id: 2,
    name: 'Product 2',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=4'}]
  },
  {
    _id: 3,
    name: 'Product 3',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=5'}]
  },
  {
    _id: 4,
    name: 'Product 4',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=6'}]
  },
  {
    _id: 5,
    name: 'Product 5',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=7'}]
  },
  {
    _id: 6,
    name: 'Product 6',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=8'}]
  },
  {
    _id: 7,
    name: 'Product 7',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=9'}]
  },
  {
    _id: 8,
    name: 'Product 8',
    price: 100,
    images: [{url: 'https://picsum.photos/500/500?random=8'}]
  }
]

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <GenderCollectionSection></GenderCollectionSection>
        <NewArrivals></NewArrivals>

        {/* Best Sellers */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best-Sellers</h2>
        <ProductDetails></ProductDetails>

        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears for Women
          </h2>
          <ProductGrid products = {placeholderProducts}></ProductGrid>
        </div>
        <FeaturedCollection></FeaturedCollection>
        <FeaturesSection></FeaturesSection>
    </div>
  )
}

export default Home