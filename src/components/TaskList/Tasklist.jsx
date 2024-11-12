import React from 'react'
import AcceptTask from './AcceptTask'
import Complete from './Complete'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {

   
    return (
        <div id='tasklist' className='sm:h-[55%] w-full mt-10 py-10 flex flex-col sm:flex-row sm:flex-nowrap items-center sm:justify-start gap-5 overflow-x-auto'>
        
         {data.tasks.map((elem, idx)=>{
            if(elem.active){
               return  <AcceptTask key={idx} data = {elem}/>
            }
            if(elem.newTask){
               return <NewTask key={idx} data = {elem}/>
            }
            if(elem.completed){
               return  <Complete key={idx} data = {elem}/>
            }
            if(elem.failed){
               return  <FailedTask key={idx} data = {elem}/>
            }
         })}

        </div>
    )
}

export default Tasklist