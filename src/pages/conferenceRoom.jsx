/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Box, Divider,} from '@mui/material';
import {TbAirConditioning,TbBulbFilled} from 'react-icons/tb'
import '../css/room.scss'
// import { Switch } from "antd";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ToggleSwitch from "../components/ToggleSwitch";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Conference() {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		};

	const handleClose = () => {
		setAnchorEl(null);
		};

	// let [mainLightSwitch, setMainLightSwitch] = useState(false);
	let [childLightSwitch1, setChildLightSwitch1] = useState(false);
	let [childLightSwitch2, setChildLightSwitch2] = useState(false);
	// let [childLightSwitch, setChildLightSwitch] = useState(false);
	
	let [mainACSwitch, setMainACSwitch] = useState(false);
	// let [childACSwitch, setChildACSwitch] = useState(false);

	// let [isON, setON]=useState(false)
	let [isACON, setACON]=useState(false)


	// const onMainSwitch = (checked) => {
	// 	setMainLightSwitch(checked);
	// 	if (checked) {
	// 		var light1 = {
	// 			"data1": 1,
	// 			"id": "8C:CE:4E:EB:82:C2",
	// 			"name": "Demo_Light2",
	// 			"time": "2023-05-31 16:24:08.380308"
	// 			}
	// 		var light2 = {
	// 			"data1": 1,
	// 			"id": "8C:CE:4E:EB:82:C3",
	// 			"name": "Demo_Light3",
	// 			"time": "2023-06-01 16:27:25.170771"
	// 			}

	// 		setChildLightSwitch1(true);
	// 		fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C2", {
	// 			method: "PUT",
	// 			headers: { "content-type": "application/json" },
	// 			body: JSON.stringify(light1)
	// 			}).then((res) => {
	// 				console.log("Light 1 ON.")
	// 			}).catch((err) => {
	// 				console.log(err.message)
	// 			});

	// 		setChildLightSwitch2(true);
	// 		fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C3", {
	// 			method: "PUT",
	// 			headers: { "content-type": "application/json" },
	// 			body: JSON.stringify(light2)
	// 			}).then((res) => {
	// 				console.log("Light 2 ON.")
	// 			}).catch((err) => {
	// 				console.log(err.message)
	// 			});


	// 		setON(true);
	// 		}
	// 	else	{
	// 		var light1 = {
	// 			"data1": 0,
	// 			"id": "8C:CE:4E:EB:82:C2",
	// 			"name": "Demo_Light2",
	// 			"time": "2023-05-31 16:24:08.380308"
	// 			}
	// 		var light2 = {
	// 			"data1": 0,
	// 			"id": "8C:CE:4E:EB:82:C3",
	// 			"name": "Demo_Light3",
	// 			"time": "2023-06-01 16:27:25.170771"
	// 			}

	// 		setChildLightSwitch1(false);
	// 		fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C2", {
	// 			method: "PUT",
	// 			headers: { "content-type": "application/json" },
	// 			body: JSON.stringify(light1)
	// 			}).then((res) => {
	// 				console.log("Light 1 OFF.")
	// 			}).catch((err) => {
	// 				console.log(err.message)
	// 			});


	// 		setChildLightSwitch2(false);
	// 		fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C3", {
	// 			method: "PUT",
	// 			headers: { "content-type": "application/json" },
	// 			body: JSON.stringify(light2)
	// 			}).then((res) => {
	// 				console.log("Light 2 OFF.")
	// 			}).catch((err) => {
	// 				console.log(err.message)
	// 			});
	// 		setON(false);
	// 		}
	// 	};

	const onACSwitch = (checked) => {
		setMainACSwitch(checked);
		if (!checked) {
			setMainACSwitch(false);
			setACON(false);
			}
		else{
			setMainACSwitch(true);
			setACON(true);
			}
		};

		const onChildLightSwitch1 = (checked) => {
			setChildLightSwitch1(checked);
			if (checked){
				setChildLightSwitch1(true);

				var light = {
					"data1": 1,
					"id": "8C:CE:4E:EB:82:CD",
					"name": "TEST_Light1",
					}
				fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:CD", {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(light)
					}).then((res) => {
						console.log("Light 1 ON.")
					}).catch((err) => {
						console.log(err.message)
					});
				}
			else
				{
				setChildLightSwitch1(false);
				var light = {
					"data1": 0,
					"id": "8C:CE:4E:EB:82:CD",
					"name": "TEST_Light1",
					}
				fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:CD", {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(light)
					}).then((res) => {
						console.log("Light 1 OFF.")
					}).catch((err) => {
						console.log(err.message)
					});
				}
			}
			
		const onChildLightSwitch2 = (checked) => {
			setChildLightSwitch2(checked);
			if (checked){
				setChildLightSwitch2(true);
				var light = {
					"data1": 1,
					"id": "8C:CE:4E:EB:82:C3",
					"name": "Demo_Light3",
					}
				fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C3", {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(light)
					}).then((res) => {
						console.log("Light 2 ON.")
					}).catch((err) => {
						console.log(err.message)
					});
				}
			else
				{
				setChildLightSwitch2(false);
				var light = {
					"data1": 0,
					"id": "8C:CE:4E:EB:82:C3",
					"name": "Demo_Light3",
					}
				fetch("http://192.168.13.35:5002/updateDeviceData/8C:CE:4E:EB:82:C3", {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(light)
					}).then((res) => {
						console.log("Light 2 OFF.")
					}).catch((err) => {
						console.log(err.message)
					});
				}
			}

	const presentationMode = () =>{
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch1(true), 2000);
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch2(false), 2000);
		handleClose()
		}
		
	const meetingMode = () =>{
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch1(true), 1000);
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch2(true), 1000);
		handleClose()
		}

	return (
		<>
		{/* <span className="mainTitle">Conference Room</span> */}
		<div className='container'>
			<span className='title'>Lights 
				{/* <Switch
					style={{
						marginTop: '15px',
						marginRight: '10px',
						width: '60px',
						float:'right'
					}}
					className="toggleSwitch"
					checkedChildren='ON'
					unCheckedChildren='OFF'
					checked={mainLightSwitch} 
					onChange={onMainSwitch}/> */}
				<Button
					id="demo-positioned-button"
					aria-controls={open ? 'demo-positioned-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<MoreVertIcon/>
				</Button>
				
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					anchorEl={anchorEl}
					
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}>
					<MenuItem onClick={presentationMode}>Presentation Mode</MenuItem>
					<MenuItem onClick={meetingMode}>Meeting Mode</MenuItem>
				</Menu>
			</span>

			<Divider/>

			<div className='lightContainer'>
				<Box className='switchBox' color={childLightSwitch1 ? '#FAF9F6' : '#424242'}>
					<TbBulbFilled className="icon" color={childLightSwitch1 ? '#ffc457' : '#424242'}/>
						<a className="subtitle">Ceiling Light</a>
					<ToggleSwitch
						style={{
							marginTop: '15px',
							marginRight: '10px',
							width: '60px',
							float:'right'
						}}
						className="toggleSwitch"
						checkedChildren='ON'
						unCheckedChildren='OFF'
						checked={childLightSwitch1}
						onChange={onChildLightSwitch1}
						{...label} color='secondary'
						/>
				</Box>

				<Box className='switchBox' color={childLightSwitch2 ? '#FAF9F6' : '#424242'} >
				<TbBulbFilled className="icon" color={childLightSwitch2 ? '#ffc457' : '#424242'}/>
					<span className="subtitle">Small Lights</span>
					<ToggleSwitch
						style={{
							marginTop: '15px',
							marginRight: '10px',
							width: '60px',
							float:'right'
						}}
						checkedChildren='ON'
						unCheckedChildren='OFF'
						checked={childLightSwitch2}
						onChange={onChildLightSwitch2}
						{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>

		<div className='container'>
			<span className='title'>Air Conditioner
				{/* <Switch
					style={{
						marginTop: '15px',
						marginRight: '10px',
						width: '60px',
						float:'right'
					}}
					checkedChildren='ON'
					unCheckedChildren='OFF'
					checked={mainACSwitch} 
					onChange={onACSwitch}/> */}
			</span>

			<Divider/>

			<div className='lightContainer'>
				<Box className='switchBox' color={mainACSwitch ? '#FAF9F6' : '#424242'} >
					<TbAirConditioning className="icon" color={mainACSwitch ? '#ffc457' : '#424242'}/>
						<span className="subtitle">AC switch</span>
						<ToggleSwitch
							style={{
								margin: '10px',
								width: '60px',
								float:'right'
							}}
							checkedChildren='ON'
							unCheckedChildren='OFF'
							checked={mainACSwitch}
							onChange={setMainACSwitch}
							{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>
		</>
	);
}