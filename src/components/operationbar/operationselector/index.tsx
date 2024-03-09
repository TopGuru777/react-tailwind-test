import React from 'react'
import { RiArrowDownDoubleFill } from "react-icons/ri";

interface Props {
  description: string
}

function OperationSelector(props: Props) {
  const { description } = props

  return (
    <div className='rounded-lg border-[#797B78] border-2 overflow-hidden bg-[#05DA02] pr-2 m-2'>
      <div className='flex flex-row justify-between relative left-[-2px] rounded-lg border-2 border-[#797B78] bg-[#E8EBF0] my-[-2px] p-2 pl-4 min-w-52'>
        <div className='text-[#B3B8BE] italic'>{description}</div>
        <div><RiArrowDownDoubleFill color='#50E74E' size={'1.5em'}/></div>
      </div>
    </div>
  )
}

export default OperationSelector
