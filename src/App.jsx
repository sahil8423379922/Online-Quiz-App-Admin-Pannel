import React, { useEffect, useState } from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth'


export default function App() {
  const[user,setuser] = useState(false)

  useEffect(()=>{
    const  activeuser = onAuthStateChanged(auth,(currentuser)=>{
      
      if(currentuser){
setuser(true);
      }
      else{
        setuser(false);
      }
    })

    

  })


  return (
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={user?<Dashboard/>:<Login/>}/><Route path='/' element ={<Login/>}/>    
    <Route path='/dashboard' element={user?<Dashboard/>:<Login/>}/>
  </Routes>
  </BrowserRouter>
  )
}
