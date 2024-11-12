import React, { useState } from 'react'

const Header = (props) => {


//     const [username, setusername] = useState('')
//    if(!data){
//     setusername('admin')
//    }else{
//     setusername(data.firstName)
//    }

//   console.log('header',data)


// console.log(props.data)

// console.log(props.data.firstName)
  const logout = ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeuser('')
    //   window.location.reload()
  }

    return (
        <div>
            <div className='flex items-end justify-between'>
                <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName}</span></h1>
                <button onClick={logout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
            </div>
        </div>
    )
}


export default Header