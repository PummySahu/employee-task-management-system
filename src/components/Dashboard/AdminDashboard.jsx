import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    // console.log('admindashboard')
    return (
        <div className='p-6 h-screen sm:p-10'>
            <Header changeuser = {props.changeuser} data={props.data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard