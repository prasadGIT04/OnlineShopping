let links=[
    {id:1, Url:'/', text:'Home'},
    {id:2, Url:'/about', text:'about'},
    {id:3, Url:'/products', text:'products'},
    {id:4, Url:'/orders', text:'orders'},
    {id:5, Url:'/cart', text:'cart'},
    {id:6, Url:'/checkout', text:'checkout'}
];

import { NavLink } from "react-router-dom";
import React from 'react'

const NavLinks = () => {
  return (<>
        {links.map((link)=>{
            const{id,Url,text}= link;
            return(
                <li key={id} >
                    <NavLink className="capitalize" to={Url}>{text}</NavLink>
               </li>
            );
        })}
    </>
  )
}

export default NavLinks