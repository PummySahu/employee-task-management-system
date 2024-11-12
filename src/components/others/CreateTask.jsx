


import React, { useContext, useState } from 'react'
import { AuthContextpro } from '../../context/AuthContext'

const CreateTask = () => {

    const [userdatacont, setuserdatacont] = useContext(AuthContextpro)

    
    const [taskTitle, settaskTitle] = useState('')
    const [date, setdate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const [description, setdescription] = useState('')


    const [newTask, setnewtask] = useState({})



    const submittask = (e)=>{
      e.preventDefault()
      console.log(userdatacont)
      setnewtask({taskTitle,date,category,description,active:false, failed:false,completed:false,newTask:true})
     
    //   const data = JSON.parse(localStorage.getItem('employee'))
    //   console.log(data)



    const data = userdatacont
      data.forEach(function(elem) {
        if(elem.firstName == assignTo){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask+1
            console.log(elem)
        }

        setuserdatacont(data)
    
        
      });
      setassignTo('')
      settaskTitle('')
      setcategory('')
      setdate('')
      setdescription('')
      
    }


  return (
    <div>
    <form onSubmit={(e)=>{submittask(e)}} className='flex flex-col sm:flex-row w-full items-start bg-neutral-800 justify-between mt-10 p-5 '>
        <div className='w-full sm:w-[40%]'>
            <div><h3>Task title</h3>
                <input value={taskTitle} onChange={(e)=>{settaskTitle(e.target.value)}} className='w-full mb-4 bg-transparent border py-1 px-2 rounded ' type="text" placeholder='Make a UI design' /></div>
            <div><h3>Date</h3>
                <input value={date} onChange={(e)=>{setdate(e.target.value)}} className='w-full mb-4 bg-transparent border py-1 px-2 rounded' type="date" /></div>
            <div><h3>Assign to</h3>
                <input value={assignTo} onChange={(e)=>{setassignTo(e.target.value)}}  className='w-full mb-4 bg-transparent border py-1 px-2 rounded' type="text" placeholder='employee name' /></div>
            <div><h3>Category</h3>
                <input value={category} onChange={(e)=>{setcategory(e.target.value)}} className='w-full mb-4 bg-transparent border py-1 px-2 rounded' type="text" placeholder='design,dev etc' /></div>
        </div>

        <div className='w-full sm:w-[40%] flex flex-col'>
            <h3>Description</h3>
            <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='bg-transparent border mt-2 rounded' name="" id="" cols="30" rows="8"></textarea>
        <button className='w-full p-2 bg-green-400 mt-5'>create task</button>
        </div>

    </form>
</div>
  )
}

export default CreateTask