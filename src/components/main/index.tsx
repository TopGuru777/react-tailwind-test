import React from 'react'
import ProgressBar from '../progressbar';
import TimerController from '../timercontroller';
import Product from '../product';
import OperationBar from '../operationbar';

interface Props {}

function Main(props: Props) {
  return (
    <main className='w-full'>
      {/* progress bar */}
      <ProgressBar progress={82}/>
      <div className='px-4'>
        {/* timer controller */}
        <TimerController />
        {/* product info */}
        <Product />
        {/* operation bar */}
        <OperationBar />
      </div>
    </main>
  )
}

export default Main
