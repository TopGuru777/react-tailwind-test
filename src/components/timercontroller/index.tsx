import React from 'react'
import TimeDisplay from './timedisplay'
import StartButton from './startbutton'

interface Props {}

function TimerController(props: Props) {
  const {} = props

  return (
    <div className='flex flex-col items-center my-4'>
      {/* time display */}
      <TimeDisplay />
      {/* time button */}
      <StartButton />
    </div>
  )
}

export default TimerController
