import React from 'react'

const Complete = ({data}) => {
    return (
        <div className='h-52 sm:h-full flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-red-500 px-2 py-1 rounded'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h1 className='font-bold text-2xl'>{data.taskTitle}</h1>
            <p className='mt-2 text-sm'>{data.taskDescription}</p>
            <div className='mt-6 bg-green-600 px-2 py-1'>
                <button className='w-full'>Mark as Completed</button>
            </div>
        </div>
    )
}

export default Complete