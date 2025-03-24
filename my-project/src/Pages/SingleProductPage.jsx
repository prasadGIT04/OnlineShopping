import React, {useState } from 'react'
import {customFetch, formatPrice} from "../utils"
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const loader = async ({params})=>{
  const response = await customFetch(`/products/${params.id}`);
  return {product: response.data.data};
};


const SingleProductPage = () => {
  const {product} = useLoaderData();
  const{image,title,price, description, colors, company} = product.attributes;

  const indianAmount = formatPrice(price);
  const [ProductColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity]= useState(1);

  const handleQuantity =(event)=> {
    setQuantity(parseInt(event.target.value));
  };
  return (
    <section>
      <div className='text:md breadcrumbs'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </div>
      {/* image */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full'/>
        {/* product info */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl font-bold text-neutral-content mt-2'>{company}</h4>
          <p className='mt-3 text-xl'>{indianAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
        </div>
        {/* colors */}
        <div className='mt-6'>
          <h4 className='text-md font-medium tracking-wider capitalize '>colors</h4>
          <div className='mt-2 '>
            {colors.map((color)=>{
              return (
                <button key={color} type='button' 
                className={`badge w-6 h-6 mr-2 ${color == ProductColor && "border-2 border-secondary"}`} 
                style={{backgroundColor: color}}
                onClick={()=>{setProductColor(color)}}
                >
                  
                </button>
              )
              
            })}
          </div>
        </div>
        {/* amount  */}
        <div className='w-full max-w-xs'>
          <label className='label '>
            <h4 className='text-md font-medium tracking-wider capitalize'>Amount</h4>
          </label>
          <div className='grid lg:grid-cols-2 gap-3 lg:gap-x-5'>
            <select className='select select-secondary select-bordered select-md w-full' 
            value={quantity}
            onChange={handleQuantity}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            {/* cartButton */}
            <div>
              <button className='btn btn-secondary btn-md' onClick={()=>console.log("item added to cart")}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SingleProductPage