import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './assets/Header/Header.jsx'
import Footer from './assets/Footer.jsx'
import Navbar from './assets/Navbar/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <div className='HeaderPosition'>
          <Header/>
        </div>

        <div className='NavbarPosition'>
          <Navbar/>
        </div>

        <div className='OutletPosition'>
          <Outlet/>
        </div>

        <div className='FooterPosition'>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
