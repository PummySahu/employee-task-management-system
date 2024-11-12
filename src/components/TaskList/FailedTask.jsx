import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-52 sm:h-full flex-shrink-0 w-[300px] bg-red-300 rounded-xl p-5'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='bg-red-500 px-2 py-1 rounded'>High</h3>
                    <h4>20 oct 2024</h4>
                </div>
                <h1 className='font-bold text-2xl'>Make a youtube video</h1>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, accusamus!</p>
                <div className=' mt-6 px-2 py-1'>
        <button>Failed</button>
      </div>
          
            </div>
  )
}

export default FailedTask