import React from 'react'
import Navbar from './navbar'
import Background from './background'
import Search from './search'
import Searchmobile from './searchMobile'

const Header = () => {
  return (
    <div className=' flex flex-col'>
        <Navbar/>
        <Background/>
        <Search/>
        <Searchmobile/>
    </div>
  )
}

export default Header