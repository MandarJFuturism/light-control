import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GrStatusPlaceholder} from 'react-icons/gr'
import '../css/Titles.scss'

export default function Titles () {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="containerBar">
        <div className="logo">
          <GrStatusPlaceholder />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GrStatusPlaceholder />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/conference">Conference</NavLink>
            </li>
            <li>
              <NavLink to="/lobby">Lobby</NavLink>
            </li>
            <li>
              <NavLink to="/cabin">Cabin</NavLink>
            </li>
            <li>
              <NavLink to="/office">Office </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
