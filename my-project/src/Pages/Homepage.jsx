import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, NavBar } from '../components'

const Homepage = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <section className='align-element py-20'><Outlet/></section>
   </>
  )
}

export default Homepage