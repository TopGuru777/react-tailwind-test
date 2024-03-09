import React from 'react'
import { RiArrowRightDoubleFill } from "react-icons/ri";

interface Props {}

function Picker(props: Props) {

  return (
    <div className='absolute right-[-4em] top-[45.5em] border-[#5D5D5B] border-4 rounded-lg bg-[#102135] flex z-10'>
      <div className='mx-1 my-3'><RiArrowRightDoubleFill color='#50E74E' size={'1.5em'}/></div>
      <div className='bg-[#BEBEBC] rounded-lg border-[#05DB01] border-2 pl-4'>
        Option
      </div>
    </div>
  )
}

export default Picker
