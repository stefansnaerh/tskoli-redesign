import { useState } from "react"

import arrow from '../../images/arrowIcon.svg'
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
              <a href="#" aria-label="link to Modules" onClick={() => close()} className="link">{"{ Modules }"}<img alt="arrow" src={arrow}/></a>
            </li>
            <li>
              <a aria-label="link to resources" onClick={() => close()} className="link">{"{ Resources }"}<img alt="arrow" src={arrow}/></a>
            </li>
            <li>
              <a aria-label="link to Gallery" onClick={() => close()} className="link">{"{ Gallery }"}<img alt="arrow" src={arrow}/></a>
            </li>
            <li>
              <a aria-label="link to People" onClick={() => close()} className="link">{"{ People }"}<img alt="arrow" src={arrow}/></a>
            </li>
          </ul>  
        </nav>
        </header>
        </>
    )
}

export default Navbar