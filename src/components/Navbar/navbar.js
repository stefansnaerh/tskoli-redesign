import { useState } from "react"


import './navbar.scss'




const Navbar = () => {
    const [closeNav, setCloseNav] = useState(false)
  
    const close = () => {
      setCloseNav(current => !current)
    }
    return (
        <>
        <header>
        <h1 className="logo">tskoli.dev</h1>
        <input id="burger" readOnly onClick={() => close()} checked={closeNav} type="checkbox"/>
        <label aria-label="click to expand info links" htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
            <li>
               <div className="nav-link-container"> 
              <a href="#" aria-label="link to Modules" onClick={() => close()} className="link">{"{Jakub}"}<p className="arrow">=></p></a>
              </div> 
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
              <a aria-label="link to Calendar page" onClick={() => close()} className="link">{"{Calendar}"}</a>
            </li>
            <span className="gray-line"></span>
          </ul>  
        </nav>
        </header>
        </>
    )
}

export default Navbar