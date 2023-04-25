import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import QuizScreen from './screens/QuizScreen'
import ResultScreen from './screens/ResultScreen'
import data from './data'
import {nanoid} from 'nanoid'
import {Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
     <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>  
          <Route path="/quiz" element={<QuizScreen/>}/>  
          <Route path="/result" element={<ResultScreen/>}/>  
        </Routes>
     </main>
    </div>
  )
}

export default App
