import React from 'react'
import {FormInput, SubmitBtn} from '../components'
import { Form , Link } from 'react-router-dom'


const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
          <FormInput type="Text" name="Username" label="UserName" />
          <FormInput type="email" name="identifier" label="Email" defaultValue="test@gmail.com" />
          <FormInput type="Password" name="Password" label="Password" />
        <SubmitBtn text="Register" />
        <p className="text-right">Already an user ? <Link to="/login" className='link link-hover link-primary' >Login</Link></p>
      </Form>
    </section>
  )
}

export default Register