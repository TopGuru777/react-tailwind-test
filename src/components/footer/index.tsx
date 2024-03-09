import React from 'react'
import CopyRight from '../copyright'
import OperationLog from '../operationlog'

interface Props {}

function Footer(props: Props) {

  return (
    <footer className='flex flex-col w-full mt-2'>
      {/* tab bar */}
      <div className='flex'>
        <div className='pl-10'>
          <div className='w-auto rounded-t-lg pr-2 bg-[#05DB01]'>
            <div className='bg-[#E7ECF2] uppercase text-xl rounded-t-lg mr-2 px-2 inline-block border-[#05DB01] border-4 border-b-0'>reading</div>
            <div className='uppercase text-xl inline-block'>logs</div>
          </div>
        </div>
      </div>
      {/* tab content */}
      <div className='rounded-b-xl border-8 border-[#05DB01] w-full'>
        <OperationLog />
        <CopyRight />
      </div>
    </footer>
  )
}

export default Footer
