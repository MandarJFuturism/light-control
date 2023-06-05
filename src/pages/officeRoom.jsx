/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Box, Divider,} from '@mui/material';
import {TbAirConditioning,TbBulbFilled} from 'react-icons/tb'

import '../css/room.scss'
import { Switch } from "antd";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Office() {

	let [mainLightSwitch, setMainLightSwitch] = useState(false);
	let [childLightSwitch1, setChildLightSwitch1] = useState(false);
	let [childLightSwitch2, setChildLightSwitch2] = useState(false);
	
	let [mainACSwitch, setMainACSwitch] = useState(false);
	let [childACSwitch, setChildACSwitch] = useState(false);

	let [isON, setON]=useState(false)
	let [isACON, setACON]=useState(false)

	const [data, setdata] = useState([])
	const [dataStatus, setDataStatus] = useState([])
	const [id, setId] = useState("")

	const getData = () => {
		fetch("http://192.168.13.35:5002/updateDeviceAcData/2C:F4:32:10:84:4E").then((response) => response.json())
			.then((result) => {
				setdata(result)
			})
		}

	const resetErrorMessage = () => {
		setDataStatus(""); 
		}

	const resetform = () => {
		setDataStatus(""); 
		}

	const onMainSwitch = (checked) => {
		setMainLightSwitch(checked);
		if (checked) {
			setChildLightSwitch1(true);
			setChildLightSwitch2(true);
			setON(true);
			}
		else	{
			setChildLightSwitch1(false);
			setChildLightSwitch2(false);
			setON(false);
			}
		};

	const onACSwitch = (checked) => {
		setMainACSwitch(checked);
		if (!checked) {
			setChildACSwitch(false);
			setACON(false);
			}
		else{
			setChildACSwitch(true);
			setACON(true);
			}
		};

	return (
		<>
		{/* <span className="mainTitle">Conference Room</span> */}
		<div className='container'>
			<span className='title'>Lights 
				<Switch
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
					onChange={onMainSwitch}/>
			</span>

			<Divider/>

			<div className='lightContainer'>
				<Box className='switchBox' color={isON ? '#f1f1f1' : '#424242'}>
					<TbBulbFilled className="icon" color={isON ? '#ffc457' : '#424242'}/>

					<span className="subtitle">Ceiling Light</span>

					<Switch
						style={{
							marginTop: '15px',
							marginRight: '10px',
							width: '60px',
							float:'right'
						}}
						className="toggleSwitch"
						checkedChildren='ON'
						unCheckedChildren='OFF'
						disabled={!mainLightSwitch}
						checked={childLightSwitch1}
						onChange={setChildLightSwitch1}
						{...label} color='secondary'
						/>

				</Box>
		
				<Box className='switchBox' color={isON ? '#f1f1f1' : '#424242'} >
				<TbBulbFilled className="icon" color={isON ? '#ffc457' : '#424242'}/>
					<span className="subtitle">Low Light</span>
					<Switch
						style={{
							marginTop: '15px',
							marginRight: '10px',
							width: '60px',
							float:'right'
						}}
						checkedChildren='ON'
						unCheckedChildren='OFF'
						disabled={!mainLightSwitch}
						checked={childLightSwitch2}
						onChange={setChildLightSwitch2}
						{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>
		
		<div className='container'>
			<span className='title'>Air Conditioner
				<Switch
					style={{
						marginTop: '15px',
						marginRight: '10px',
						width: '60px',
						float:'right'
					}}
					checkedChildren='ON'
					unCheckedChildren='OFF'
					checked={mainACSwitch} 
					onChange={onACSwitch}/>
			</span>
			<Divider/>
			<div className='lightContainer'>
				<Box className='switchBox' color={isACON ? '#f1f1f1' : '#424242'} >
					<TbAirConditioning className="icon" color={isACON ? '#ffc457' : '#424242'}/>
						<span className="subtitle">AC switch</span>
						<Switch
							style={{
								margin: '10px',
								width: '60px',
								float:'right'
							}}
							checkedChildren='ON'
							unCheckedChildren='OFF'
							disabled={!mainACSwitch}
							checked={childACSwitch}
							onChange={setChildACSwitch}
							{...label} color='secondary'
						/>
				</Box>
			</div>
		</div>
		</>
	);
}