import React from 'react'
import { assets, footer_data } from '../assets/assets'


const Footer = () => {
  return (
    <div className='px- 6 md:px-16 bg-gray-100 lg:px-24 xl:px-32 bg:primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500' >

        <div className='relative top-10'>
            <img src={assets.logo} alt="" className='rounded-full w-50 relative bottom-10' />
            <p className='max-w-[410px] relative bottom-10'>Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Aperiam et odio provident, eius, 
            consequatur suscipit exercitationem assumenda
             veniam, magnam iste nostrum. Omnis, perspiciatis.
             Ex unde facilis sint ipsam! Perspiciatis, nam?</p>
        </div >
        <div className='flex relative top-9 bottom-10flex-wrap justify-between w-full md:w-[45%] gap-5'>
         {footer_data.map((footer, index)=>(
         <div key={index}>
            <h3 className='font-semibold text-base text gray-500 md:mb-5 mb-2'>{footer.title}</h3>
         <ul className='text-sm space-y-1'>
{footer.links.map((links,i)=>(
    <li key={i}>
        <a href="#" className='hover:underline transition'>{links}</a>
    </li>
))}

         </ul>
         </div>))}
        </div>

        <div>

        </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright 2025 &copy; MyBlog - All right reserved.
        </p>

    </div>
  )
}

export default Footer