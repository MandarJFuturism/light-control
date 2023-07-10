	import { useState } from 'react'
	import { NavLink } from 'react-router-dom'
	import {ImHome} from 'react-icons/im'
	import '../css/Navbar.scss'

	export default function Navbar () {
	const [showNavbar, setShowNavbar] = useState(false)

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar)
	}

	return (
		<nav className="navbar">
			<div className="containerBar">
				<div className="logo">
					<ImHome href='/' />
					<a className='mainTitle' href='/'>Smart Automation System</a>
				</div>

				<div className="menu-icon" onClick={handleShowNavbar}>
					<ImHome />
				</div>

				<div className={`nav-elements ${showNavbar && 'active'}`}>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/editDevice">Devices</NavLink>
						</li>
						<li>
							<NavLink to="/Lobby">Lobby</NavLink>
						</li>
						<li>
							<NavLink to="/Conference">Conference</NavLink>
						</li>
						<li>
							<NavLink to="/Cabins">Cabins</NavLink>
						</li>
						<li>
							<NavLink to="/Office">Office </NavLink>
						</li>
						{/* <li>
							<NavLink to="/Room">Room </NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
		)
	}
