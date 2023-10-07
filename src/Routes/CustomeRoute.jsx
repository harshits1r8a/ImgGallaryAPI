import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ScreenOne from '../Components/ScreenOne/ScreenOne'
import ImgCard from '../Components/ImgCard/ImgCard'

export default function CustomeRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ScreenOne/>}/>
            <Route path='/:id' element={<ImgCard/>}/>
        </Routes>
    </div>
  )
}
