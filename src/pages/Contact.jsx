import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {



  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500 '>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>
    
    <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm justify-center'>
      <img className='w-full md:max-w-[360px]' src = {assets.contact_image} alt=""/>
      <div className='flex flex-col justify-center gap-6 items-start'>
        <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
        <p className='text-gray-500'>Gandhi Maidan Patna<br/>In Front Of Gate no.10</p>
        <p className='text-gray-500'>Tel: (734) 887-6756<br/> Email: medilatch@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>Careers at MEDILATCH</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 taxt-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>




    </div>
  )
}

export default Contact