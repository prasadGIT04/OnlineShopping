import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const SubmitBtn = ({text}) => {
    const navigate = useNavigate();
    const isSubmitting = navigate.state === "submitting"
  return (

    <button className='btn btn-primary capitalize' type='submit' disabled={isSubmitting} > 
    {isSubmitting?(<span className='loading loading-spinner'></span>) : text}
    </button>
  )
}

export default SubmitBtn