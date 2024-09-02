import React from 'react'
import logo from '../../assets/logo.png'

const Nabbar = () => {
  return (
    <div className='bg-red font-pops text-white py-[30px] '>
      <div className='max-w-Container mx-auto md:flex items-center '>
        <div className='md:w-1/5'>
            <picture>
                <img src={logo} alt="" />
            </picture>
        </div>
        <div className=' md:w-4/5 md:justify-end '>
       <ul className='md:flex items-center md:justify-end md:gap-x-[47px] '>
        <li> <a href="" className='text-base font-semibold' >Home</a> </li>
        <li> <a href="" className='text-base font-semibold' >About</a></li>
        <li> <a href="" className='text-base font-semibold' >Services</a></li>
        <li> <a href="" className='text-base font-semibold' >Gallery</a></li>
        <li> <a href="" className='text-base font-semibold' >Blog</a></li>
        <li> <a href="" className='text-base font-semibold border-4 border-[white] py-[14px] px-[32px] ' >CONTACT</a></li>
        
       </ul>
        </div>
      </div>
    </div>
  )
}

export default Nabbar
