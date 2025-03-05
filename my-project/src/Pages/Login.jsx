import React from 'react'
// import FormInput from '../components/FormInput'
// import {FormInput,SubmitBtn } from '../components'
import { Form , Link } from 'react-router-dom'
import { SubmitBtn, FormInput } from '../components'

const Login = () => {
  return (
    <section className='h-screen grid place-items-center border'>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>

        <FormInput type="email" name="identifier" label="Email ID" defaultValue="test@gmail.com" />
        <FormInput type="Password" name="Password" label="Password" />

        {/* <div className='flex flex-row justify-between m-1'>
          <Link className='link link-hover link-primary capitalize'>Forgot password?</Link> */}
        {/* </div> */}

        <SubmitBtn text="login" />
        <button type='button' className= 'btn btn-secondary btn-block capitalize'>Guest</button>

        <p className="text-right">Not a user yet ?  <Link to="/register" className='link link-hover link-primary capitalize'>register Now</Link></p>
      </Form>

    </section>
  )
}

export default Login