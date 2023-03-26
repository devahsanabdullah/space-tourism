import React from 'react'

import Navbar from '../../components/navbar/Navbar'
// px-[15px] pb-[100px]


export default function Home() {
  return (
    <div className=" bg-homemob md:bg-hometab lg:bg-home bg-center  bg-cover w-screen min-h-screen  px-10 md:px-52  top-0 left-0 absolute flex  items-end justify-between">
        <div className='flex flex-col lg:flex-row justify-between items-center   pt-[220px] w-full  '>
          <div className=' pb-[90px] '>
            <p className='text-[#d2d8f9] text-[28px] font-normal tracking-[4.72px] text-center md:text-left '>So, you want to travel to</p>
            <h1 className='text-[100px] md:text-[150px] text-[#fff] uppercase font-Bellefair text-center md:text-left'>Space</h1>
            <p className='text-[18px] md:w-[382px] font-medium leading-8 tracking-normal text-[#d2d8f9]'>
              Let’  s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>  
          </div>            
          <div className=' flex justify-center items-center w-[274px] h-[274px] bg-[#fff] rounded-full z-40 text-[#0b0d17]  font-Bellefair text-[32px] relative mb-[65px] cursor-pointer befores' >
              Explore
          </div>
        </div>
    </div>
  )
}
