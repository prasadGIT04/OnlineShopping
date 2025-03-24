import React from 'react'
import { formatPrice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
    const {products} = useLoaderData()
  return (
    <div className='pt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product)=>{
            const {title, price,image, company} = product.attributes;
            const indianAmount = formatPrice(price);
            return (
                <Link key={product.id} to={`${product.id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
                    <figure className='px-4 pt-4'>
                        <img src={image} alt={title} className='rounded h-64 md:h-48 w-full object-cover'/>
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title capitalize tracking-wider '>{title}</h2>
                        <h4 className='text-s tracking-wide text-neutral-content mt-2'>{company}</h4>
                        <span className='text-secondary'>{indianAmount}</span>
                    </div>  
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsList