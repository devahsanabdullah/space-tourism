import React,{useState, useEffect} from 'react'

import {crewMem} from "../../constants/constant"

export default function Crew() {
  const [activeTab, setactiveTab] = useState('1')
  const [crewData, setcrewData] = useState([])
  useEffect(() => {
    setcrewData(crewMem.filter((e)=>e.id.includes(activeTab)))
  }, [activeTab])

  return (
    <div className="bg-crewmob md:bg-crewtab lg:bg-crew  pt-[220px] px-10  md:pl-52 md:pr-28 bg-center bg-cover w-screen min-h-screen top-0 left-0 absolute flex  justify-between">
      <div className="w-full relative">
        <h1 className="text-[#fff] text-[16px] md:text-[28px] font-normal tracking-[4.72px] mb-[45px] text-center md:text-left ">
          <b className="text-[#979797] mr-8">02</b>
          Meet your crew
        </h1>
        <div className=" flex flex-col-reverse md:flex-col lg:flex-col justify-between items-center md:items-start  ">
          <div className='text-center md:text-left'>
            <h1 className="text-[16px] md:text-[32px] mt-[154px] mb-[15px] text-[#fff] uppercase font-Bellefair ">
              {crewData.map((e)=>e.designation)}
            </h1>
            <h1 className="text-[24px] md:text-[56px] mb-[27px] text-[#fff] uppercase font-Bellefair  ">
              {crewData.map((e)=>e.name)}            
            </h1>
            <p className="text-[15px] md:text-[16px] w-[327px] md:w-[488px] font-medium leading-8 tracking-normal text-[#d2d8f9] mb-[100px]">
              {crewData.map((e)=>e.detail)}
            </p>
            </div>  
            <div class=" z-30 flex  space-x-6 mb-[35px]">
                <button type="button" onClick={()=>setactiveTab('1')} className={`${activeTab == '1'?'bg-[#fff]':'bg-[#979797]'} w-4 h-4 rounded-full `}></button>
                <button type="button" onClick={()=>setactiveTab('2')} className={`${activeTab == '2'?'bg-[#fff]':'bg-[#979797]'} w-4 h-4 rounded-full `}></button>
                <button type="button" onClick={()=>setactiveTab('3')} className={`${activeTab == '3'?'bg-[#fff]':'bg-[#979797]'} w-4 h-4 rounded-full `}></button>
                <button type="button" onClick={()=>setactiveTab('4')} className={`${activeTab == '4'?'bg-[#fff]':'bg-[#979797]'} w-4 h-4 rounded-full `}></button>
            </div>
          <div>
            <img src={crewData.map((e)=>e.img)} alt="" className=" lg:absolute mb-8 md:mb-0  w-[327px] md:w-auto bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
