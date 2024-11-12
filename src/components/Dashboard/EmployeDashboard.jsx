import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import Tasklist from '../TaskList/Tasklist'

const EmployeDashboard = (props) => {

  return (
    <div className='p-6 h-screen sm:p-10'>
       <Header data = {props.data} changeuser = {props.changeuser} user={props.user}/>
       <TaskListNum data = {props.data}/>
       <Tasklist data = {props.data}/>
    </div>
  )
}

export default EmployeDashboard