import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { BsFillGridFill, BsList } from "react-icons/bs";
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

const ProductsContainer = () => {
    const{ meta} = useLoaderData();
    const totalProducts = meta.pagination.total;    

    const [Layout, setLayout] = useState("grid");

    const setActiveStyle = (pattern)=>{
        return `text-xl btn btn-circle btn-sm ${
            pattern === Layout ? "btn-primary text-primary-content": "btn-ghost text-base-content"
        }`
    }
  return (<>
    {/* Header */}
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md'>{totalProducts} product{totalProducts>1 && "s"}</h4>
        <div className='flex gap-5'>
            <button
            onClick={()=>setLayout("grid")}
            className={setActiveStyle("grid")}
            >
                <BsFillGridFill />
            </button>
            <button
            onClick={()=>setLayout("List")}
            className={setActiveStyle("List")}
            >
                <BsList />
            </button>
        </div>
    </div>
    {/* products */}
    <div>
        {totalProducts === 0 ?(
            <h5>sorry, No Products to show</h5>
        ): Layout === "grid" ? (
        <ProductsGrid/>
        ):<ProductsList/>}
    </div>
  </>
  )
}

export default ProductsContainer