import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  if(error.status===404){
    return(<main className='grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <p className='text-9xl font-semibold text-primary'>404</p>
        <p className='text-3xl tracking-tighter font-bold'>Page  not found</p>
        <Link className='btn btn-secondary mt-10'>Go back to Home page</Link>
      </div>
    </main>)
  }
  return (
    <main className='grid main-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-bold'>There was an error...</h4>
    </main>
  )
}

export default Error