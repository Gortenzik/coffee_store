import React from 'react'
import image from './logo3.jpg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Review from './Review';
import Contact from './Contact';
import AboutUs from './aboutUs';
import './App.css';



function App() {
  return <Router>
    <nav> 
        <img className='logo' src={image} alt='' width='80px'/>
        <Link to='/' className='link'>Меню</Link>
        <Link to='/contact' className='link'>Контакты</Link>
        <Link to='/aboutUs' className='link'>О Компании</Link>
        <Link to='/review' className='link'>Оставить отзыв</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/review' element={<Review/>}/>
    </Routes>

  </Router>
}

export default App;
