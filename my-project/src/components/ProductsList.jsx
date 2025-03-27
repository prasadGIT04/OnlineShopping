import React from 'react'
import { formatPrice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
    const {products} = useLoaderData()
  return (
    <div className='mt-12 grid gap-y-8'>
        {products.map((product)=>{
            const {title, price,image, company, description} = product.attributes;
            const indianAmount = formatPrice(price);
            return (
                <Link key={product.id} to={`${product.id}`} className='p-8 rounded flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
                    <img src={image} alt={title} className='rounded-lg h-24 sm:h-32 w-24 sm:w-32 object-cover group-hover:scale-105 transition duration-300 '/>
                    <div className='ml-0 sm:ml-16 '>
                        <h2 className='capitalize font-medium text-lg '>{title}</h2>
                        <h4 className='capitalize text-md text-neutral-content '>{company}</h4>
                        {/* <br /> */}
                        {/* <p className='text-sm w-96 text-slate-500'>{description}</p> */}
                    </div>  
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>{indianAmount}</p>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsList