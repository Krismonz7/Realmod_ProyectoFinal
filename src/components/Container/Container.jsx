import React from 'react'
import { NavBar } from '../Nav-Bar.js/NavBar'
import { Search } from '../Search/Search'
import Listings from '../Listings/Listings'
import Properties from '../Properties/Properties'
import Agents from '../Agents/Agents'
const Container = () => {
  return (
    <div>
      <NavBar/>
      <Search/>
      <Listings/>
      <Properties/>
      <Agents/>
    </div>
  )
}

export default Container