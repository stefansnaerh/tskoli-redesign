import { useState } from "react"
import { Link } from 'react-router-dom';

import './navbar.scss'




const Navbar = () => {
    const [closeNav, setCloseNav] = useState(false)
  
    const close = () => {
      setCloseNav(current => !current)
    }
    return (
        <>
        <header>
        <a href="#">
          <div className="logo-container">
            <h1 className="logo">tskoli.dev</h1>
          </div>
        </a>
        <input id="burger" readOnly onClick={() => close()} checked={closeNav} type="checkbox"/>
        <label aria-label="click to expand info links" htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
            <li>
              <a href="#" aria-label="link to Modules" onClick={() => close()} className="link">{"{Modules}"}</a>
            </li>
            <span className="gray-line"></span>
            <li>
              <a aria-label="link to resources" onClick={() => close()} className="link">{"{Resources}"}</a>
            </li>
            <span className="gray-line"></span>
            <li>
              <a aria-label="link to Gallery" onClick={() => close()} className="link">{"{Gallery}"}</a>
            </li>
            <span className="gray-line"></span>
            <li>
              <a aria-label="link to People" onClick={() => close()} className="link">{"{People}"}</a>
            </li>
            <span className="gray-line"></span>
            <li>
              <Link to="/calendarpage" aria-label="link to Calendar" onClick={() => close()} className="link">{"{Calendar}"}</Link>
            </li>
            <span className="gray-line"></span>
          </ul>  
        </nav>
        </header>
        </>
    )
}

export default Navbar