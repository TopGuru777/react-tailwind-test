import React from 'react'
import { RiArrowRightDoubleFill, RiMoonLine } from "react-icons/ri";
import { IoMdExpand } from "react-icons/io";

interface Props {}

function Header(props: Props) {
  return (
    <header className="bg-dark-blue rounded-t-lg px-8 pb-1 border-b-dark-red border-b-4 grid grid-cols-[1fr_auto_1fr] justify-center">
      {/* icons */}
      <div className='flex flex-col justify-center mr-auto'>
        <div className='bg-[#F2F3F5] rounded-lg mb-1 p-2'>
          <IoMdExpand size={'1em'}/>
        </div>
        <div className='bg-[#F2F3F5] rounded-lg mt-1 p-2'>
          <RiMoonLine size={'1em'}/>
        </div>
      </div>
      {/* title */}
      <div className='text-white text-right mt-2'>
        <h1 className='font-bold text-7xl'>RP1625</h1>
        <h3 className='uppercase text-xl pr-1'>Production Time: 00:00:00</h3>
      </div>
      {/* blank */}
      <div></div>
    </header>
  )
}

export default Header
