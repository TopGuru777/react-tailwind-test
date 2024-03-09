import React from 'react'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import OperationSelector from './operationselector';

interface Props {}

function OperationBar(props: Props) {

  return (
    <div className='flex flex-col items-center'>
      {/* title */}
      <div className='uppercase text-[#10223A] text-xl font-bold'>Total units</div>
      {/*  operatio details line */}
      <div className='grid grid-cols-[1fr_auto_1fr] justify-center w-full'>
        {/* p */}
        <div className='flex items-center mr-auto'>
          <div className='rounded-lg border-[#797B78] border-2 overflow-hidden bg-[#05DA02] pr-2'>
            <div className='relative left-[-2px] rounded-lg border-2 border-[#797B78] bg-[#E8EBF0] my-[-2px]'>
              <div className='text-5xl font-bold text-[#112236] px-3'>P</div>
            </div>
          </div>
        </div>
        {/* numbers */}
        <div className='text-9xl'>
          <span className='text-[#BDBDBD] font-bold'>0</span><span className='text-[#102135] font-bold'>12</span>
        </div>
      </div>
      {/* assign operator */}
      <OperationSelector description='*Assign Operator' />
      {/* assign job */}
      <OperationSelector description='*Assign Job'/>
    </div>
  )
}

export default OperationBar
