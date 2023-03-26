import React, {useState} from 'react'
import { Link } from "react-router-dom";

function ResponsiveNav(props) {
    
  return (
      <div className="flex flex-col top-0 right-0 absolute h-screen w-4/5 smlNav z-50 gap-[48px] md:hidden  ">
        <i className="fa-solid fa-xmark text-3xl text-white block w-[19.9px] mt-[34px] mb-[65px] mr-[26.5px] self-end" onClick={()=>props.state(false)}></i>
        <div className="">
          <ul className=" text-white flex flex-col h-full gap-[48px] text-[16px]  mb-[65px] ml-[26.5px]">
              <li className="cursor-pointer">
                <Link to={"/"} onClick={()=>props.state(false)}>
                  <b className="mr-[11px]">00</b>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to={"destination"}
                  onClick={()=>props.state(false)}>
                  <b className="mr-[11px]">01</b>
                  Destination
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"crew"} onClick={()=>props.state(false)}>
                  <b className="mr-[11px]">02</b>
                  Crew
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"technology"} onClick={()=>props.state(false)}>
                  <b className="mr-[11px]">03</b>
                  Technology
                </Link>
              </li>
          </ul>
        </div>
      </div>
  );
}

export default ResponsiveNav;