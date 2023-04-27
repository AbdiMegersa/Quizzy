import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import QuizScreen from './screens/QuizScreen'
import ResultScreen from './screens/ResultScreen'
import data from './data'
import {nanoid} from 'nanoid'
import {Routes, Route , Link} from 'react-router-dom'

function App() {


  return (
    <div className="App">
     <main>
    
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>  
          <Route path="/quiz" element={<QuizScreen/>}/>  
          <Route path="/result" element={<ResultScreen/>}/>  
        </Routes>
        <div className="dev">
      <Link  to="https://www.github.com/AbdiMegersa" target='_blank'>
       Developed by Abdi Megersa
      </Link> 
     </div> 
     </main>
    </div>
  )
}

export default App
