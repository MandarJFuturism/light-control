import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import '../css/Sidebar.scss'
import '../App.scss'

export default function Sidebar () {

	const [data, setData] = useState([])
	const [showNavbar, setShowNavbar] = useState(false)

	const getData = () => {
		fetch("http://localhost:3005/Rooms").then((response) => response.json())
			.then((result) => {
				setData(result)
			})
		}

	useEffect(() => {
		getData()
	},[])


	const setDark = () => {
		localStorage.setItem("theme", "dark")
		document.documentElement.setAttribute("data-theme", "dark")
		}
	
	const setLight = () => {
		localStorage.setItem("theme", "light")
		document.documentElement.setAttribute("data-theme", "light")
		}
	
	const storedTheme = localStorage.getItem("theme")
	
	const prefersDark =	window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
	
	const defaultDark =	storedTheme === "light" || (storedTheme === null && prefersDark)

	const toggleTheme = e => {
		if (e.target.checked) {
			setDark()
			localStorage.setItem('checked','true');
			
			}
		else {
			setLight()
			localStorage.setItem('checked','false');
			
			}
		}

	return (
		<nav style={{width: "10vh"}}>
			<div className={`sidebar ${showNavbar && 'active'}`}>

				{/* <div className='title'>
					<span>Smart Automation System</span>
				</div> */}
				<div className='elements'>
					<NavLink className='page' to="/">
						<img src="./images/sidebar/home.png" alt="Home"/>
						<span className='caption'>Home</span>
					</NavLink>

					<NavLink className='page' to="/editDevice">
						<img src="./images/sidebar/devices.png" alt="device"/>
						<span className='caption'>Devices</span>
					</NavLink>

					{ data ? data.map((item) => {
						return(
							
							<NavLink className='page' to={item.room}>
								<img src={item.logo} alt={item.room}/>
								<span className='caption'>{item.room}</span>
							</NavLink>
						)}
					):null}
				</div>

				<div className='toggle'>
					<input type="checkbox" id="switch" onChange={toggleTheme}/>
					<label htmlFor="switch">Toggle</label>
				</div>

			</div>
		</nav>
		)
	}
