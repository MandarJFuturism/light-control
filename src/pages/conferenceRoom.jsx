/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,} from "react";
import { Box, Divider,} from '@mui/material';
import {TbAirConditioning,TbBulbFilled} from "react-icons/tb"
import '../css/room.scss'
import { Switch } from "antd";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

	let [childLightSwitch1, setChildLightSwitch1] = useState(false);
	let [childLightSwitch2, setChildLightSwitch2] = useState(false);
	
	let [onACSwitch, setACSwitch] = useState(false);

	const onChildLightSwitch1 = (checked) => {
		setChildLightSwitch1(checked);
		if (checked){
			setChildLightSwitch1(true);
			var light = {
				"data1": 1,
				"id": "C8:C9:A3:57:AA:D3",
				"name": "TEST_Light5",
				}
			fetch("http://192.168.13.35:5002/updateDeviceData/C8:C9:A3:57:AA:D3", {
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
				"id": "C8:C9:A3:57:AA:D3",
				"name": "TEST_Light5",
				}
			fetch("http://192.168.13.35:5002/updateDeviceData/C8:C9:A3:57:AA:D3", {
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
				"id": "24:A1:60:23:D7:6F",
				"name": "TEST_Light6",
				}
			fetch("http://192.168.13.35:5002/updateDeviceData/24:A1:60:23:D7:6F", {
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
				"id": "24:A1:60:23:D7:6F",
				"name": "TEST_Light6",
				}
			fetch("http://192.168.13.35:5002/updateDeviceData/24:A1:60:23:D7:6F", {
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
		
	const onACToggle = (checked) => {
		setACSwitch(checked);
		if (checked){
			setACSwitch(true);
			var AC = {
				"name": "FT_5_Java",
				"data_temp":"20",
				"data": 1
				}
			fetch("http://192.168.13.35:5002/updateDeviceAcData/2C:F4:32:10:84:4E", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(AC)
				}).then((res) => {
					console.log("AC ON")
				}).catch((err) => {
					console.log(err.message)
				});
			}
		else
			{
			setACSwitch(false);
			var AC = {
				"name": "FT_5_Java",
				"data_temp":"30",
				"data": 1
				}
			fetch("http://192.168.13.35:5002/updateDeviceAcData/2C:F4:32:10:84:4E", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(AC)
				}).then((res) => {
					console.log("AC OFF")
				}).catch((err) => {
					console.log(err.message)
				});
			}
		}

	const presentationMode = () =>{
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch1(true), 1000);
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch2(false), 3000);
		handleClose()
		}
		
	const meetingMode = () =>{
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch1(true), 1000);
		setTimeout(() => console.log('Signal sent!'), onChildLightSwitch2(true), 3000);
		handleClose()
		}

	return (
		<>
		<div className='container'>
			<a className='title'>Lights 
				<Button
					id="Profiles"
					sx={{color:'#ffc457'}}
					color="secondary"
					aria-controls={open ? 'light-profiles' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<MoreVertIcon />
				</Button>
				
				<Menu
					id="Profiles"
					aria-labelledby="light-profiles"
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
			</a>

			<Divider/>

			<div className='lightContainer'>
				<Box className='switchBox' bgcolor={ childLightSwitch1 ? '#ffb833' : '#424242'}>
					<TbBulbFilled className="icon" />
						<a className="subtitle">Ceiling Light</a>
					<Switch
						className="switchStyle"
						checkedChildren='ON'
						unCheckedChildren='OFF'
						checked={childLightSwitch1}
						onChange={onChildLightSwitch1}
						style={{backgroundColor: '#252525'}}
						{...label} color='secondary'
						/>
				</Box>

				<Box className='switchBox' bgcolor={childLightSwitch2 ? '#ffb833' : '#424242'} >
				<TbBulbFilled className="icon" />
					<span className="subtitle">Small Lights</span>
					<Switch
						className="switchStyle"
						checkedChildren='ON'
						unCheckedChildren='OFF'
						checked={childLightSwitch2}
						onChange={onChildLightSwitch2}
						style={{backgroundColor: '#252525'}}
						{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>

		<div className='container'>
			<span className='title'>Air Conditioner
			</span>

			<Divider/>

			<div className='lightContainer'>
				<Box className='switchBox' bgcolor={onACSwitch ? '#ffb833' : '#424242'} >
					<TbAirConditioning className="icon" />
						<span className="subtitle">AC switch</span>
						<Switch
							className="switchStyle"
							checkedChildren='ON'
							unCheckedChildren='OFF'
							checked={onACSwitch}
							onChange={onACToggle}
							style={{backgroundColor: '#252525'}}
							{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>
		</>
	);
}