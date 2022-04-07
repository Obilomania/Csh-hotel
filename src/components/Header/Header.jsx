import React from 'react'
import BootCarousel from './BootCarousel'
import Navigation from '../Navigation/Navigation'
import Content from './Content'

const Header = () => {
  return (
    <div className='header__container' id='Home'>
      <Navigation />
      <BootCarousel />
      <Content />
    </div>
  )
}

export default Header