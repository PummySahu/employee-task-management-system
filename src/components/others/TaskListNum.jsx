import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='flex flex-wrap justify-between gap-3 screen mt-10 sm:gap-5 sm:flex-nowrap'>
        <div className='h-32 sm-h-40 p-4 w-[48%] rounded-xl bg-red-400 md:py-6 md:px-9'>
            <h2 className='text-5xl font-bold sm:text-3xl sm:font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-semibold sm:text-xl sm:font-medium'>active</h3>
        </div>
        <div className='h-32 sm-h-40 p-4 w-[48%] rounded-xl bg-green-400 md:py-6 md:px-9'>
            <h2 className='text-5xl font-bold sm:text-3xl sm:font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-semibold sm:text-xl sm:font-medium'>New Task</h3>
        </div>
        <div className='h-32 sm-h-40 p-4 w-[48%] rounded-xl bg-blue-400 md:py-6 md:px-9'>
            <h2 className='text-5xl font-bold sm:text-3xl sm:font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-semibold sm:text-xl sm:font-medium'>completed</h3>
        </div>
        <div className='h-32 sm-h-40 p-4 w-[48%] rounded-xl bg-yellow-400 md:py-6 md:px-9'>
            <h2 className='text-5xl font-bold sm:text-3xl sm:font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-semibold sm:text-xl sm:font-medium'>failed</h3>
        </div>
    </div>
  )
}

export default TaskListNum