import React from 'react'
import CategoryMain from '../components/CategoryMain'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar />
        Home Part
        <Slider />
        <CategoryMain />
    </div>
  )
}

export default Home