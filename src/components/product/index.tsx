import React from 'react'
import { RiArrowDownDoubleFill } from "react-icons/ri";

interface Props {}

function Product(props: Props) {

  return (
    <div className='flex flex-col'>
      {/* Title */}
      <div className='flex justify-center'>
        <div className='text-lg flex'>
          <span className='text-[#112035] font-bold'>Product:</span> <RiArrowDownDoubleFill color='#50E74E' size={'1.5em'}/> <span className='text-[#858585]'>66X4 CL4 RUBBER GASKET</span>
        </div>
      </div>
      {/* Details */}
      <div className='flex justify-between items-center my-2'>
        {/* Description */}
        <div className='mr-2'>
          <span className='uppercase text-[#112236] text-xl font-bold'>Cycle details</span>
          <div className='pl-4 text-sm'>
            <div><span className='text-[#102236] font-bold'>Factory:</span>&nbsp;<span className='text-[#999999]'>Pipe and Box</span></div>
            <div><span className='text-[#102236] font-bold'>Average Time</span>:&nbsp;<span className='text-[#999999]'>135 Seconds</span></div>
            <div className='grid grid-cols-[auto_auto]'>
              <span className='text-[#102236] font-bold text-right'>Average Weight:</span>
              <span className='text-[#999999]'>&nbsp;3.490 Tons</span>
              <span className='text-right uppercase text-[#102236] font-bold'>Unit ph:</span>
              <span className='text-[#999999]'>&nbsp;35</span>
              <span className='text-right uppercase text-[#102236] font-bold'>Total tons:</span>
              <span className='text-[#999999]'>&nbsp;254.98</span>
              <span className='text-right uppercase text-[#102236] font-bold'>Tons ph:</span>
              <span className='text-[#999999]'>&nbsp;67.678</span>
            </div>
          </div>
        </div>
        {/*image & caption*/}
        <div className='flex flex-col items-center ml-2'>
          {/*image*/}
          <div>
            <img src="/assets/images/product_image.png" />
          </div>
          {/*caption*/}
          <div className='flex flex-col items-center text-md font-bold'>
            <div className='text-center'>
              <span className='text-[#0F2137] uppercase'>Target mark:</span>&nbsp;<span className='text-[#BDAA8C]'>25</span>
            </div>
            <div className='text-center'>
              <span className='text-[#0F2137] uppercase'>Marks gained today:</span>&nbsp;<span className='text-[#BDAA8C]'>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
