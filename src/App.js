import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import SingleMovie from './SingleMovie';
import Error from './Error';


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />}></Route>
        <Route path="*" element={<Error />}></Route>


      </Routes>

    </>
  )
}

export default App
