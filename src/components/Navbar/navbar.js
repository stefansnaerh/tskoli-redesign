import { useState } from "react"

import arrow from '../../images/arrowIcon.svg'
import { Link, useLocation } from "react-router-dom"
import './navbar.scss'




const Navbar = () => {
    const [closeNav, setCloseNav] = useState(false)
    const location = useLocation();
    const close = () => {
      setCloseNav(current => !current)
    }
    if (location.pathname === "/loginpage") return (<div></div>)
    return (
        <>
        <header>
        <Link aria-label="button to homepage" to="/">
          <div className="logo-container">
            <h1 className="logo">tskoli.dev</h1>
          </div>
        </Link>
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
              <Link aria-label="link to Resources" onClick={() => close()} to="/resources" className="link">{"{ Resources }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to Gallery" onClick={() => close()} to="/gallery" className="link">{"{ Gallery }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to People" onClick={() => close()} to="/people" className="link">{"{ People }"}<img alt="arrow" src={arrow}/></Link>
            </li>
            <li>
              <Link aria-label="link to Calendar" onClick={() => close()} to="/calendar" className="link">{"{ Calendar }"}<img alt="arrow" src={arrow}/></Link>
            </li>
          </ul>  
        </nav>
        </header>
        </>
    )
}

export default Navbar