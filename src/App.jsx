import React from 'react'
import Header from './componnets/Header'
import Contact from './componnets/Contact'
import ChatTap from './componnets/ChatTap'
import Chatpage from './pages/Chatpage'
import UpdatePge from './pages/UpdatePge'
import CallPage from './pages/Callpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
  <div className="main">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ChatTap/>} />
      <Route path='/update' element={<UpdatePge />} />
      <Route path='/calls' element={<CallPage />} />
      <Route path='/c' element={<Contact />} />
      <Route path='/chatpage' element={<Chatpage />} />
    
    </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App