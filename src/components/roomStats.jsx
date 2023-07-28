/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react'
import '../css/homePage.scss'
import { NavLink } from 'react-router-dom';
import { Box, Divider,} from '@mui/material';
import { Switch } from "antd";
import {SiHomeassistant} from 'react-icons/si'

export default function RoomStats() {
		
	const [data, setData] = useState([])
	const [id, setId] = useState("")
	const [selectedRoom, setSelectedRoom] = useState("Lobby Room");

	const getData = () => {
		fetch("http://localhost:3005/posts").then((response) => response.json())
			.then((result) => {
				setData(result)
			})
		}
	
		useEffect(() => {
			getData()
			},[])

		return (
			<>
				<div style={{display:'flex', flexDirection:"row"}}>
					<span className='homeSubtitle'>Active Devices</span>
					<div className="page">
						<div className="select-dropdown">
							<select value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
								<option value="">Select Room</option>
								<option value="Conference Room">Conference Room</option>
								<option value="Lobby Room">Lobby Room</option>
								<option value="Cabins">Cabins</option>
								<option value="Office Space">Office Space</option>
							</select>
						</div>
					</div>
				</div>

				<div className='roomWrapper'>
					{ data ? data.filter(item => item.room === selectedRoom && item.status === true).map((item, index) => {
						const onToggle = (checked) => {

							if (item.status===false) {
								fetch('http://localhost:3005/posts/' + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										id: id,
										deviceId: item.deviceId,
										device: item.device,
										deviceType: item.deviceType,
										status: true,
										room: item.room
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
								
							else	{
								fetch('http://localhost:3005/posts/' + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										id: id,
										deviceId: item.deviceId,
										device: item.device,
										deviceType: item.deviceType,
										status: false,
										room: item.room
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light OFF")
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							}
					return(
					<div className='deviceContainer'>
						<div className='deviceWrapper' key={index}>
							<Box className='deviceBox' bgcolor={item.status ? '' : '#424242'}>
								<div className='deviceTop'>
									<SiHomeassistant className={item.status ? "deviceIcon" : "deviceIcon"}/>
									<Switch
										style={{
											margin:'inherit',
											width: '60px',
											backgroundColor: '#252525',
											float:'right'
										}}
										className="devieSwitch"
										checkedChildren='ON'
										unCheckedChildren='OFF'
										checked={item.status}
										onChange={onToggle}
									/>
								</div>
								<div className='deviceBottom'>
									<span id='device'>{item.device}</span>
									<span id='deviceType'>{item.deviceType}</span>
								</div>

							</Box>
						</div>
					</div>)}):null}
				</div>
			</>
		);
	}
