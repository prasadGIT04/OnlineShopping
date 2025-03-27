import React from 'react'
import { customFetch } from '../utils'
import { Filter, ProductsContainer } from '../components'

const url = "/products"
export const loader = async({request})=>{
  const response = await customFetch(url)
  const products = response.data.data;
  // to use the pagination we need meta data
  const meta = response.data.meta; 
  return {products, meta};
}
const Products = () => {
  return (
    <div>
      {/* <ProductsList/>
      <ProductsGrid/> */}
      <Filter />
      <ProductsContainer/>
    </div>
  )
}

export default Products