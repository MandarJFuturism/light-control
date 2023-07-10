/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Divider,} from '@mui/material';
import {TbAirConditioning, TbBulbFilled} from 'react-icons/tb'
import {FaFan} from 'react-icons/fa'
import '../css/room.scss'
import { Switch } from "antd";

export default function Cabins() {

	const [data, setData] = useState([])
	const [id, setId] = useState("")

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
			<div className='container'>
				<span className='title'>Lights</span>

				<Divider/>
				{ data ? data.filter(item => item.room === 'Cabins' && item.deviceType === 'Lights').map((item, index) => {
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
					<div className='lightContainer' key={index}>
					<Box className='switchBox' bgcolor={item.status ? '#ffb833' : '#424242'}>
						<TbBulbFilled className="icon"/>

						<span className="subtitle">{item.device}</span>

						<Switch
							style={{
								margin:'inherit',
								width: '60px',
								backgroundColor: '#252525',
								float:'right'
							}}
							className="toggleSwitch"
							checkedChildren='ON'
							unCheckedChildren='OFF'
							checked={item.status}
							onChange={onToggle}
							/>
					</Box>
				<Divider/>
				</div>
				)}
			):null}
			</div>
			<div className='container'>
				<span className='title'>Air Con</span>

				<Divider/>
				{ data ? data.filter(item => item.room === 'Cabins' && item.deviceType === 'Air Con').map((item, index) => {
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
					<div className='lightContainer' key={index}>
					<Box className='switchBox' bgcolor={item.status ? '#ffb833' : '#424242'}>
						<TbAirConditioning className="icon"/>

						<span className="subtitle">{item.device}</span>

						<Switch
							style={{
								margin:'inherit',
								width: '60px',
								backgroundColor: '#252525',
								float:'right'
							}}
							className="toggleSwitch"
							checkedChildren='ON'
							unCheckedChildren='OFF'
							checked={item.status}
							onChange={onToggle}
							/>
					</Box>
				<Divider/>
				</div>
				)}
			):null}
			</div>

			<div className='container'>
				<span className='title'>Fans</span>

				<Divider/>
				{ data ? data.filter(item => item.room === 'Cabins' && item.deviceType === 'Fan').map((item, index) =>	{
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
					<div className='lightContainer' key={index}>
					<Box className='switchBox' bgcolor={item.status ? '#ffb833' : '#424242'}>
						<FaFan className={item.status ? "icon animate" : "icon"}/>

						<span className="subtitle">{item.device}</span>

						<Switch
							style={{
								margin:'inherit',
								width: '60px',
								backgroundColor: '#252525',
								float:'right'
							}}
							className="toggleSwitch"
							checkedChildren='ON'
							unCheckedChildren='OFF'
							checked={item.status}
							onChange={onToggle}
							/>
					</Box>
				<Divider/>
				</div>
				)}
			):null}
			</div>

		</>
	);
}