import React from 'react'

const FormCheckBox = ({name,label, defaultValue, size}) => {
  return (
    <div className='form-control items-center'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize '>{label}</span>
        </label>
        <input 
        type="checkbox" 
        name={name} 
        defaultValue={defaultValue} 
        placeholder={name} 
        className={`input input-bordered ${size}`} 
        />

    </div>
  )
}

export default FormCheckBox