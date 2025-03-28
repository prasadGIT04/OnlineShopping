import React from 'react'
import FormInput from './FormInput'
import { Form , Link, useLoaderData } from 'react-router-dom'
import FormSelector from './FormSelector'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'

const Filter = () => {
    const {meta} = useLoaderData();
    console.log(meta.categories)
  return (
    <>
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        <FormInput type="search" label="Search Product" name="Search" Size="input-sm"/>
        {/* category */}
        <FormSelector
        label="select category"
        name="category"
        list ={meta.categories}
        size = "select-sm"
        />
        {/* companies */}
         <FormSelector
        label="select Company"
        name="companies"
        list ={meta.companies}
        size = "select-sm"
        />
        {/* Order */}
         <FormSelector
        label="Sort By"
        name="order"
        list ={["all","a-z", "z-a", "High to Low", "Low to High"]}
        size = "select-sm"
        />
        {/* range */}
        <FormRange
        name="price"
        label="Price range"
        size="range=sm"/>
        {/* form checkbox */}
        <FormCheckBox
        name="Shipping"
        label="Free Shipping"
        size="checkbox-sm"
        />
        <button type='submit' className='btn btn-primary btn-sm'>Search</button>
        <Link to="/products" className='btn btn-accent btn-sm' >Reset</Link>
    </Form>
    </>
  )
}

export default Filter