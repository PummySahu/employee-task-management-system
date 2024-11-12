

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'



export const AuthContextpro = createContext()

const AuthContext = ({children}) => {

const [userdatacont, setuserdatacont] = useState(null)
const [admindata, setadmindata] = useState(null)

// localStorage.clear()
useEffect(() => {
  setLocalStorage()
  const {employee} = getLocalStorage()
  setuserdatacont(employee)

  const {admin} = getLocalStorage()
  setadmindata(admin)
  console.log('admin',admin)
}, [])
console.log(userdatacont)

  return (
    <div>
      <AuthContextpro.Provider value={[userdatacont, setuserdatacont, admindata]} >
        {children}
      </AuthContextpro.Provider>
    </div>
  )


}

export default AuthContext


