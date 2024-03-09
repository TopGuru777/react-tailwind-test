import React from 'react'

interface Props {}

function OperationLog(props: Props) {
  const {} = props

  return (
    <div className='flex w-full border-[#05DB01] border-b-2 bg-[#E8EBF0]'>
      <div className='p-4 text-[#9B9A98] text-xs'>
        <p>Open The Timer Controller</p>
        <p className='uppercase'>........Operations........</p>
      </div>
      <div className='grow'>
        <img src='/assets/images/chart.png' />
      </div>
    </div>
  )
}

export default OperationLog
