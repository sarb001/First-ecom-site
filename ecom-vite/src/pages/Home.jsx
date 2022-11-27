import React from 'react'
import CategoryMain from '../components/CategoryMain'
import Navbar from '../components/Navbar'
import ProductsHome from '../components/ProductsHome'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar />
        Home Part
        <Slider />
        <CategoryMain />
        <ProductsHome />
    </div>
  )
}

export default Home