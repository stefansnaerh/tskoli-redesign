import { useState } from "react"

import arrow from '../../images/arrowIcon.svg'
import { Link } from "react-router-dom"
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
              <Link aria-label="link to Modules" onClick={() => close()} to="/allmodules" className="link">{"{ Modules }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to resources" onClick={() => close()} to="/resources" className="link">{"{ Resources }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to Gallery" onClick={() => close()} to="/gallery" className="link">{"{ Gallery }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to People" onClick={() => close()} to="/people" className="link">{"{ People }"}<img alt="arrow" src={arrow}/></Link>
            </li>
          </ul>  
        </nav>
        </header>
        </>
    )
}

export default Navbar