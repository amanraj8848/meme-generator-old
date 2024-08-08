import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from  "./components/Home"
import EditPage from './pages/EditPage'
const App = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/edit" element={<EditPage/>} />
      </Routes>
    </div>
  )
}

export default App