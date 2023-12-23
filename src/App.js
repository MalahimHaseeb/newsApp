import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import FetchData from './components/FetchData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/general' element={<FetchData cat="general" />}/>
          <Route  path='/business' element={<FetchData cat="business" />}/>
          <Route  path='/entertainment' element={<FetchData cat="entertainment" />}/>
          <Route  path='/health' element={<FetchData cat="health" />}/>
          <Route  path='/science' element={<FetchData cat="science" />}/>
          <Route  path='/supports & technology' element={<FetchData cat="supports & technology" />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App