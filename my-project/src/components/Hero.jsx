import React from 'react'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import { Link } from 'react-router-dom'

const carouselImages=[hero1,hero2,hero3,hero4]

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
        <div>
            <h1 className='max-w-2xl font-bold tracking-tight text-4xl sm:text-6xl'>
                This is a store where you can Shop anything
            </h1>
            <p className='mt-8 max-w-xl text-lg leading-8'>
                Lorem ipsum dolor sit consectetur adipisicing elit. Quod molestiae sapiente minus aliquid cupiditate nesciunt, commodi quo earum accusamus fugiat praesentium quidem ad officiis ipsum blanditiis illum sit repellendus eum.
            </p>
            <div className='mt-10'>
                <Link to='products' className='btn btn-primary tracking-wide ' >Our Products</Link>
            </div> 
        </div>
        <div className='lg:carousel carousel-center hidden h-[28rem] p-4 space-x-4 bg-neutral'>
            {carouselImages.map((image,index)=>{
                return(
                    <div key={index} className='carousel-item'>
                        <img src={image} className='rounded-box h-full w-80 object-cover' />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hero