import React,{useState, useEffect} from 'react'

import {planetData} from '../../constants/constant'


export default function Destination() {
  const [activeTab, setactiveTab] = useState('moon')
  const [dataValue, setdataValue] = useState([])
  useEffect(() => {
    setdataValue(planetData.filter((e)=>e.name.includes(activeTab)))
  }, [activeTab])
  

  // console.log(dataValue);
  return (
    <div className='bg-destmob md:bg-desttab lg:bg-destination  pt-[220px] px-10  md:px-52 bg-center bg-cover w-screen min-h-screen top-0 left-0 absolute flex  justify-between'>
        <div className='w-full'>
          <h1 className='text-[#fff] text-[16px] md:text-[28px]  font-normal tracking-[4.72px] mb-[45px] text-center md:text-left '>
              <b className='text-[#979797] mr-8'>01</b>
              Pick your destination
            </h1>
          <div className=' flex  justify-between items-center flex-wrap'>
            <img src={dataValue.map((e)=>e.img)} alt="" className='w-[170px] md:w-[445px] md:max-w-[445px] mb-[53px]' />
              <div className='w-[445px] text-[#979797]'>
                <ul className='flex justify-center md:justify-start  text-[#979797] gap-[26px] md:gap-[35px] items-center mb-[37px] h-[39px] relative text-[16px] tracking-[4px] '>
                  <div className={`${activeTab == 'moon'?'activeNav text-[#fff]':'text-[#979797]'} h-full flex items-center btmborderD relative `}>
                    <li className='cursor-pointer' onClick={()=>setactiveTab('moon')}>
                      <a >
                        Moon
                      </a>
                    </li>
                  </div>
                  <div className={`${activeTab == 'mars'?'activeNav text-[#fff]':'text-[#979797]'} h-full flex items-center btmborderD relative `}>
                    <li className='cursor-pointer' onClick={()=>setactiveTab('mars')}>
                      <a >
                        Mars
                      </a>
                    </li>
                    </div>
                  <div className={`${activeTab == 'europa'?'activeNav text-[#fff]':'text-[#979797]'} h-full flex items-center btmborderD relative `}>
                    <li className='cursor-pointer' onClick={()=>setactiveTab('europa')}>
                      <a >
                        Europa
                      </a>
                    </li>
                  </div>
                  <div className={`${activeTab == 'titan'?'activeNav text-[#fff]':'text-[#979797]'} h-full flex items-center btmborderD relative `}>
                    <li className='cursor-pointer' onClick={()=>setactiveTab('titan')}>
                      <a>
                        Titan
                      </a>
                    </li>
                  </div>
                </ul>
                <div className='text-center md:text-left '>
                  <h1 className='text-[56px] md:text-[100px] text-[#fff] uppercase font-Bellefair '>{dataValue.map((e)=>e.name)}</h1>
                  <p className='text-[16px] font-medium leading-8 tracking-normal text-[#d2d8f9] mb-[54px]'>
                    {dataValue.map((e)=>e.detail)}
                  </p>
                  <hr className=' text-[#d2d8f9]' />
                  <div className='flex flex-col md:flex-row gap-[32px] md:gap-[79px] mt-[28px] mb-[62px] items-center md:items-start'>
                    <div>
                      <h1 className='text-[14px] tracking-[2.36px] mb-[12px] font-bold text-[#d2d8f9]'>AVG. DISTANCE</h1>
                      <p className='text-[28px] font-Bellefair text-[#fff]'>{dataValue.map((e)=>e.distance)} KM</p>
                    </div>
                    <div>
                      <h1 className='text-[14px] tracking-[2.36px] mb-[12px] font-bold text-[#d2d8f9]'>EST. TRAVEL TIME</h1>
                      <p className='text-[28px] font-Bellefair text-[#fff]'>{dataValue.map((e)=>e.travelTime)}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
