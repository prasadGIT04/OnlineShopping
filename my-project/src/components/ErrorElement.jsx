import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorElement = () => {
    const error= useRouteError()
    console.log("error message");
    
  return (
    <h4 className='font-bold text-4xl'>there Was an error</h4>
  )
}

export default ErrorElement