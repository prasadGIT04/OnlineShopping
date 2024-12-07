import React from 'react'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <nav><span>Store</span><Outlet/></nav>
    </>
  )
}

export default Homepage