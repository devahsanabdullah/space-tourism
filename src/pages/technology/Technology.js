import React,{useState, useEffect} from 'react'

import {vehData} from "../../constants/constant"

export default function Technology() {
  const [activeTab, setactiveTab] = useState('1')
  const [techData, settechData] = useState([])
  useEffect(() => {
    settechData(vehData.filter((e)=>e.id.includes(activeTab)))
  }, [activeTab])

  return (
<div className="bg-techmob md:bg-techtab lg:bg-tech  pt-[220px]  px-10   md:px-32 bg-center bg-cover w-screen min-h-screen top-0 left-0 absolute flex  justify-between">
      <div className="w-full">
        <h1 className="text-[#fff] text-[16px] md:text-[28px] font-normal tracking-[4.72px] mb-[45px] text-center md:text-left">
          <b className="text-[#979797] mr-8">03</b>
          Space launch 101
        </h1>
        <div className=" flex gap-[80px]  justify-center md:justify-start items-center flex-wrap ">
          <div class="flex flex-row md:flex-col md:gap-8 gap-[16px]">
            <button type="button" onClick={()=>setactiveTab('1')} className={`${activeTab == '1'?'bg-white text-[#0b0d17]':null} md:w-20 md:h-20 w-[40px] h-[40px] border-2 flex border-[#85868b] hover:border-[#fff] border-solid text-[16px] md:text-[32px] font-Bellefair justify-center items-center  rounded-full text-[#fff] `}>1</button>
            <button type="button" onClick={()=>setactiveTab('2')} className={`${activeTab == '2'?'bg-white text-[#0b0d17]':null} md:w-20 md:h-20 w-[40px] h-[40px] border-2 flex border-[#85868b] hover:border-[#fff] border-solid text-[16px] md:text-[32px] font-Bellefair justify-center items-center  rounded-full text-[#fff] `}>2</button>
            <button type="button" onClick={()=>setactiveTab('3')} className={`${activeTab == '3'?'bg-white text-[#0b0d17]':null} md:w-20 md:h-20 w-[40px] h-[40px] border-2 flex border-[#85868b] hover:border-[#fff] border-solid text-[16px] md:text-[32px] font-Bellefair justify-center items-center  rounded-full text-[#fff] `}>3</button>
          </div>
          <div className="text-center md:text-left">
            <h1 className='text-[16px] tracking-[2.7px] mb-[11px] font-bold text-[#d2d8f9]'>THE TERMINOLOGY...</h1>
            <h1 className="text-[24px] md:text-[56px] text-[#fff] mb-[17px] uppercase font-Bellefair ">
              {techData.map((e)=>e.name)}            
            </h1>
            <p className="w-[327px] md:w-[444px] text-[15px] md:text-[18px] font-medium leading-8 tracking-normal text-[#d2d8f9] mb-[97px]">
              {techData.map((e)=>e.detail)}
            </p>
          </div>
          <img src=  {techData.map((e)=>e.img)} alt="" className="lg:absolute right-0   w-screen lg:w-auto relative" />
        </div>
      </div>
    </div>
  )
}
