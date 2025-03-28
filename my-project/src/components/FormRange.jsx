import React, { useState } from 'react'
import {formatPrice} from '../utils'

const FormRange = ({label, name, size}) => {
    const step = 10000;
    const maxPrice = 1000000;
    const [SelectedPrice, setSelectedPrice]=useState(step)
  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize '>{label}</span>
            <span>{formatPrice(SelectedPrice)}</span>
        </label>
        <input type="range" name={name} min={0} max={maxPrice} value={SelectedPrice}
        onChange={(e)=>setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}/>
        <div className='w-full flex justify-between text-xs px-2 mt-2'>
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>max : {formatPrice(maxPrice)}</span>
        </div>
    </div>
  )
}

export default FormRange