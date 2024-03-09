import React from 'react'

interface Props {
  progress: number
}

function ProgressBar(props: Props) {
  const {progress} = props

  return (   
    <div className={`w-[${progress}%] bg-green h-4`}></div>
  )
}

export default ProgressBar
