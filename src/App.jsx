import React, { useEffect, useState } from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth'
import Navbar from './Navbar';
import Livequiz from './Livequiz';
import Mockquiz from './Mockquiz';
import Livecategory from './Livecategory';
import Mockcategory from './Mockcategory';
import Totaluser from './Totaluser';
import Totalrevenue from './Totalrevenue';
import Paiduser from './Paiduser';
import Freeuser from './Freeuser';


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
  <Navbar/>
  <Routes>
    <Route path='/' element={user?<Dashboard/>:<Login/>}/><Route path='/' element ={<Login/>}/>    
    <Route path='/dashboard' element={user?<Dashboard/>:<Login/>}/>
    <Route path='/livequiz' element={user?<Livequiz/>:<Login/>}/>
    <Route path='/mockquiz' element={user?<Mockquiz/>:<Login/>}/>
    <Route path='/livecategory' element={user?<Livecategory/>:<Login/>}/>
    <Route path='/mockcategory' element={user?<Mockcategory/>:<Login/>}/>
    <Route path='/totaluser' element={user?<Totaluser/>:<Login/>}/>
    <Route path='/revenue' element={user?<Totalrevenue/>:<Login/>}/>
    <Route path='/paiduser' element={user?<Paiduser/>:<Login/>}/>
    <Route path='/freeuser' element={user?<Freeuser/>:<Login/>}/>

    
  </Routes>
  </BrowserRouter>
  )
}
