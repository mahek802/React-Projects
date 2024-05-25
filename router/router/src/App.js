import React from 'react'
import Home from './Home'
import Work from './Work'
import Services from './Services'


import Contact from './Contact'
import { Routes , Route} from 'react-router-dom'
import './App.css';
import About from './About'
import Navbar from './Navbar';

const navData = [{
  'navOne':'Home',
  'navTwo':'About',
  'navThree':'Work',
  'navFour':'Services',
  // 'navFive':'Blog',
  'navFive':'Contact'

  // <Navbar title="TextUtils" aboutText="About TextUtils"/>
}
]

function App() {
  return (
    <React.Fragment>
<Navbar mainNav={navData}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* <Route path='/blog' element={<Blog/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;