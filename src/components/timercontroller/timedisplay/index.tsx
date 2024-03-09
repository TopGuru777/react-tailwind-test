import React from 'react'

interface Props {}

function TimeDisplay(props: Props) {
  const {} = props

  return (
    <div className='bg-[#E8EBF0] border-[#05DB00] border-4 rounded-md py-2 px-4 shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)] z-10 tracking-wide font-bold text-7xl'>
      <span className='text-[#BCBCBC]'>00:00:0</span><span className='text-[#112138]'>0:00</span>
    </div>
  )
}

export default TimeDisplay
