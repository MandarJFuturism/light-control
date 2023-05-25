/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

import { Box, Divider,} from '@mui/material';
import {BsLightbulb} from 'react-icons/bs'
import '../css/room.scss'
import { Switch } from "antd";

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Office() {

	let [mainLightSwitch, setMainLightSwitch] = useState(false);
	let [childLightSwitch1, setChildLightSwitch1] = useState(false);
	let [childLightSwitch2, setChildLightSwitch2] = useState(false);
	
	let [mainACSwitch, setMainACSwitch] = useState(false);
	let [childACSwitch, setChildACSwitch] = useState(false);


	const onMainSwitch = (checked) => {
		setMainLightSwitch(checked);
		if (checked) {
			setChildLightSwitch1(true);
			setChildLightSwitch2(true);
			}
		else	{
			setChildLightSwitch1(false);
			setChildLightSwitch2(false);
		}
	};

	const onACSwitch = (checked) => {
		setMainACSwitch(checked);
		if (!checked) {
			setChildACSwitch(false);
			}
		else
			setChildACSwitch(true)
		};

	return (
		<>
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
				<Box className='switchBox' >
					<BsLightbulb className='switchIcon'/>
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
		
				<Box className='switchBox' >
					<BsLightbulb className='switchIcon'/>
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
				<Box className='switchBox' >
					<BsLightbulb className='switchIcon'/>
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