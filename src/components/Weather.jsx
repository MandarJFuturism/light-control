import React, {useState, useEffect} from 'react'
import '../css/weather.scss'
import { Button } from 'antd';
import {WiCloudRefresh} from 'react-icons/wi'

const Weather = ({weatherData}) => {

	const [lat, setLat] = useState(['18.5602']);
	const [lon, setLon] = useState(['73.8031']);
	const [status, setStatus] = useState(null);

	const apiKey = "58f8e4dbb15792aca427edb6b746e3fa";
	const [name,setName] = useState('');
	const [mainTemp,setMainTemp] = useState('');
	const [description,setDescription] = useState('');
	const [wind,setWind] = useState('');
	const [icon,setIcon] =useState('');
	const [subTemp,setSubTemp] =useState('');
	const [pressure,setPressure] =useState('');

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
			}
		else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition((position) => {
				setStatus(null);
				localStorage.setItem(setLat,setLon);
				setLat(position.coords.latitude);
				console.log(lat)
				setLon(position.coords.longitude);
				console.log(lon)
				}, () => {
					setStatus('Unable to retrieve your location');
				});
			}
		}

	window.onload = getLocation;

	// setInterval(function() {
	// 	getLocation()
	// 	}, 60000);

	useEffect(()=> {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`)
			.then(res=>res.json())
			.then(data=>{
				console.log(data);
				setName(data.name);
				setMainTemp(data.main.temp);
				setDescription(data.weather[0].description);
				setWind(data.wind.speed)
				setSubTemp(data.main.feels_like)
				setPressure(data.main.pressure)
				setIcon(`./images/weather/${data.weather[0].icon}.svg`)
				})
			},[lat,lon]
		)
	return (
		<>
			<div className='weatherContainer'>
				<div className='weatherIcon'>
					<img id='wIcon' src={icon} alt="Home"/>
				</div>
				<Button className='weatherButton' onClick={getLocation}>{status}<WiCloudRefresh/></Button>
				<div className='weatherData'>
					<span id='temp'>{Math.round(mainTemp)}<i>&#x2da;c</i></span>
				</div>
				<div className='weatherMessage'>
					<span id='city'>{name}</span>
					<span id='message'>Feels like {Math.round(subTemp)}<i>&#x2da;c</i> with {description}</span>
				</div>
			</div>

			<div className='statusWrapper'>
				<div className='statusContainer'>
					<span className='statusNumber'>18<i style={{fontSize:"15px"}}> &#x2da;C</i></span>
					<img src="./images/svg/roomtemp.svg" alt="Home"/>
					<span className='footer'>Room Temp</span>
				</div>
				<div className='statusContainer'>
					<span className='statusNumber'>60<i style={{fontSize:"15px"}}>%</i></span>
					<img src="./images/svg/humidity.svg" alt="Home"/>
					<span className='footer'>Humidity</span>
				</div>
				<div className='statusContainer'>
					<span className='statusNumber'>{Math.round(wind)} <i style={{fontSize:"15px"}}>km/h</i></span>
					<img src="./images/svg/wind.svg" alt="Home"/>
					<span className='footer'>Wind</span>
				</div>
				<div className='statusContainer'>
					<span className='statusNumber'>{Math.round(pressure)} <i style={{fontSize:"15px"}}>km/h</i></span>
					<img src="./images/svg/raindrop.svg" alt="Home"/>
					<span className='footer'>Dew Point</span>
				</div>
			</div>
		</>
		);
	}

export default Weather;