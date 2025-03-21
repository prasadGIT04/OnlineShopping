import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-wrap gap-2 items-center justify-center sm:gap-x-6'>
      <h1 className='text-4xl font-bold leading-none tracking-tighter sm:text-6xl'>
        This is 
        </h1>
      <div className='stats bg-primary shadow'>
        <div className='stat'>
          <div className='stat-value text-primary-content text-4xl font-bold tracking-widest'>Store</div>
        </div>
      </div>
    </div>
    <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt maiores repellat eaque mollitia sunt velit sed. Velit odit eius expedita? Incidunt, alias dolorem quasi ex veniam ab, exercitationem eligendi eos consectetur in cum distinctio laudantium provident illum voluptatibus temporibus, vitae iste molestiae facilis unde et. Aspernatur ducimus aliquam reiciendis?
    </p>
    </>
  )
}

export default About