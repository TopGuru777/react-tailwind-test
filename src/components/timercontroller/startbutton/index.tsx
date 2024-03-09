import React from 'react'

interface Props {}

function StartButton(props: Props) {
  const {} = props

  return (
    <div className='bg-[#05DB01] rounded-b-xl overflow-hidden px-3 pb-1'>
      <div className='bg-[#CDD0D5] rounded-b-lg pb-0'>
        <div className='text-[#0F2135] px-8 font-bold text-4xl h-9'>START</div>
      </div>
    </div>
  )
}

export default StartButton
