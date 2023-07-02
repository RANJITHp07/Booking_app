import React from 'react'
import Fetured from '../../components/featured/Fetured'
import FeaturedProperties from '../../components/featuredproperty/featuredproperty'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/mailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertList/propertylist'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
      <Fetured/>
      </div>
      <h1 className='homeTitle'>Browrse by property type</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Home guest love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Home
