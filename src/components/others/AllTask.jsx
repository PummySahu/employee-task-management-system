import React, { useContext } from 'react'
import { AuthContextpro } from '../../context/AuthContext'

const AllTask = () => {


    const [userdatacont, setuserdatacont] = useContext(AuthContextpro)
    // console.log(userdatacont.employee,'alltask')

    return (
        <div className='bg-neutral-800 p-2 mt-5 sm:p-5 '>
         <div className='bg-red-400 flex justify-between text-center p-2 gap-2 sm:gap-0  rounded mb-2'>
                <h2 className='w-1/5 text-sm sm:text-lg text-left sm:ml-5 font-medium '>employee name</h2>
                <h3 className='w-1/5 text-sm sm:text-lg font-medium '>New task</h3>
                <h3 className='w-1/5 text-sm sm:text-lg font-medium '>Active task</h3>
                <h3 className='w-1/5 text-sm sm:text-lg font-medium '>Complete</h3>
                <h3 className='w-1/5 text-sm sm:text-lg font-medium '>Failed</h3>
            </div>

           <div className='overflow-auto h-[80%]'>
           {userdatacont.map((elem, idx)=>{
                return  <div key={idx} className='border-2 border-emerald-600 flex justify-between text-center p-2 rounded mb-2'>
                <h2 className='w-1/5 text-sm sm:text-lg font-medium text-left sm:ml-5 text-white-500'>{elem.firstName}</h2>
                <h5 className='w-1/5 text-sm sm:text-lg font-medium text-blue-500'>{elem.taskCounts.newTask}</h5>
                <h5 className='w-1/5 text-sm sm:text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
                <h5 className='w-1/5 text-sm sm:text-lg font-medium text-green-500'>{elem.taskCounts.completed}</h5>
                <h5 className='w-1/5 text-sm sm:text-lg font-medium text-red-500'>{elem.taskCounts.failed}</h5>
            </div>
                })}
           </div>
        </div>
    )
}

export default AllTask