import React from 'react'

const UploadProgress = ({progress}) => {
  return (
    <div className='w-[250px] h-8 p-1 bg-slate-500 rounded-lg my-3'>
        <div className='h-full text-center bg-green-500 rounded-md' style={{width: `${progress}%`}}>
            <small className='font-bold'>{progress}%</small>
        </div>
    </div>
  )
}

export default UploadProgress