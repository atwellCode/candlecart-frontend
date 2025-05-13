import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10 overflow-x-hidden'>
      <MainBanner/>
      <Categories/>
      <BestSelling/>
      <BottomBanner/>
      <NewsLetter/>
    </div>
  )
}

export default Home
