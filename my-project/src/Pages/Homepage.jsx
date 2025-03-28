import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, NavBar } from '../components'
import Loading from '../components/Loading'

const Homepage = () => {
  const navigation =useNavigation()
  const isPageLoading = navigation.state === "loading"
  return (
    <>
    <Header/>
    <NavBar/>
    {isPageLoading ? <Loading/>:
    <section className='align-element py-20'><Outlet/></section>}
   </>
  )
}

export default Homepage