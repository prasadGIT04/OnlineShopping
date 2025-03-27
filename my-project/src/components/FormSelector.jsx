import React from 'react'

const FormSelector = ({name, label, list, defaultValue, size}) => {
    console.log(list)
    return (
    
    <div className='form-control'>
        <label htmlFor={name} className='label'>
            <span className='label-text capitalize'>{label}</span>
        </label>
        <select name={name} 
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
        id={name}
        >
            {list.map((item,index)=>{
                return (
                    <option key={index} value={item}>{item}</option>
                )
            })}
        </select>
    </div>
  )
}

export default FormSelector