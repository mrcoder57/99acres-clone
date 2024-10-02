import React from 'react'
import Navbar from './navbar'
import Background from './background'
import Search from './search'
import Searchmobile from './searchMobile'
import MobileBackground from './mobile-bg'
import MobileNav from './mobileNav'

const Header = () => {
  return (
    <div className=' flex flex-col'>
        <Navbar/>
        <MobileNav/>
        <Background/>
        <MobileBackground/>
        <Search/>
        <Searchmobile/>
    </div>
  )
}

export default Header