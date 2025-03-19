import React from 'react'
import { BsFillMoonFill , BsSunFill, BsCart3} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { useState,useEffect } from 'react';
// import NavLinks from './NavLinks';
import NavLinks from './NavLinks';

const themes={
    winter:"winter",
    dracula:"dracula"
}
const getThemeFromLocalStorage=()=>{
     return localStorage.getItem("theme")|| themes.winter
}

const NavBar = () => {
    const [theme, setTheme]= useState(getThemeFromLocalStorage());
    const handleTheme=()=>{
        const{winter,dracula}=themes;
        const newTheme = theme === winter ? dracula : winter;
        setTheme(newTheme)
    }
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
        localStorage.setItem("theme",theme)
    },[theme])
  return (
    <nav className='bg-base-200'>
        <div className="navbar ">
        <div className="navbar-start" >
            {/* title */}
            <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">Shop</NavLink>
            {/* dropdown */}
            <div className='dropdown'>
                <label className='btn btn-ghost lg:hidden'>
                <FaBarsStaggered tabIndex={0} className='h-6 w-6'/>
                </label>
                <ul className='menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-200' >
                <NavLinks/>
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className='menu menu-horizontal'><NavLinks/></ul>
        </div>
        <div className="navbar-end">
            <label className='swap swap-rotate'>
                <input type="checkbox" onChange={handleTheme}/>
                <BsSunFill className='swap-on w-6 h-6'/>
                <BsFillMoonFill className='swap-off  w-6 h-6'/>
            </label>

            <NavLink to="./cart" className="btn btn-ghost btn-circle btn-md ml-4" >
                <div className='indicator'>
                    <BsCart3 className='w-6 h-6'/> 
                    <span className='indicator-item badge badge-sm badge-primary'>8</span>
                </div>
            </NavLink>
        </div>
        </div>
    </nav>
  )
}

export default NavBar