

import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext, { AuthContextpro } from './context/AuthContext'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserdata, setloggedInUserdata] = useState(null)
  const [userdatacont, setuserdatacont, admindata] = useContext(AuthContextpro)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
       const userdata = JSON.parse(loggedInUser)
      setUser(userdata.role)
      setloggedInUserdata(userdata.data)
    }
    // }
  }, [])
  
  
  const loginfun = (email, password) => {
    console.log(email, password)
    if (email == "admin@ex.com" && password == '123') {
      setUser('admin')
      setloggedInUserdata(admindata)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
  }

    else if (userdatacont) {
      const employee = userdatacont.find((e)=>e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserdata(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))

      }
    }
    else { alert('wrong credential') }
  }
 
  return (
    <>

      {!user ? (
        <Login getdata={loginfun} />
      ) : user === 'admin' ? (
        <AdminDashboard changeuser = {setUser}  data = {loggedInUserdata} />
      ) : (
        <EmployeDashboard data = {loggedInUserdata} changeuser = {setUser} user = {user}/>
      )}

    </>
  )
}

export default App


