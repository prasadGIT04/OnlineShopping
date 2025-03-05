import React from 'react'

const FormInput = ({label, name, type, defaultValue}) => {
  return (
    <label className="form-control">
        <div className="label">
            <span className="label-text">{label}</span>
            {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input type={type} name={name} defaultValue={defaultValue} placeholder={name} className="input input-bordered" />
        {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
            <span className="label-text-alt">Bottom Right label</span>
        </div> */}
    </label>
  )
}

export default FormInput