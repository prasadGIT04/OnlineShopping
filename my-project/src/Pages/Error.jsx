import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  if(error.status===404){
    return(<main className='grid min-h-[100vh] place-items-center px-8'>
      <div className='text-center'>
        <p className='text-9xl font-semibold text-primary'>404</p>
        <p className='text-3xl tracking-tighter font-bold'>Page  not found</p>
      </div>
    </main>)
  }
  return (
    <div>Error</div>
  )
}

export default Error