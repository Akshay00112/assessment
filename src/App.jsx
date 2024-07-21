import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import GridCard from '../components/GridCard'
import FormBasic from '../components/FormBasic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/GridCard' element={<GridCard/>}/>&nbsp;&nbsp;
          
          <Route path='/FormBasic' element={<FormBasic/>}/>&nbsp;&nbsp;
        </Routes>
    </>
  )
}

export default App
