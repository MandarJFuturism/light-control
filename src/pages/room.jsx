/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Divider,} from '@mui/material';
import {TbAirConditioning, TbBulbFilled} from 'react-icons/tb'
import {FaFan} from 'react-icons/fa'
import '../css/room.scss'
import { Switch } from "antd";

export default function Room() {

	const [data, setData] = useState([])
	const [status, setStatus] = useState(false)
	const [s1, sets1] = useState(0)
	const [s2, sets2] = useState(0)
	const [s3, sets3] = useState(0)
	const [s4, sets4] = useState(0)
	const baseURL = "http://localhost:3004/posts/";

	const getData = () => {
		fetch(baseURL).then((response) => response.json())
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
				{ data ? data.filter(item => item.name === 'FT_Testing_Light' || item.name === 'FT_S_C1').map((item, index) => {

					const setSwitches = () => {
						sets1(item.s1)
						sets2(item.s2)
						sets3(item.s3)
						sets4(item.s4)
						}
					window.onload=setSwitches;

					const setSwitch = () => {
						fetch(baseURL + item.id, {
							method: 'PUT',
							body: JSON.stringify({
								data: item.data,
								id: item.id,
								name: item.name,
								s1: s1,
								s2: s2,
								s3: s3,
								s4: s4,
								time: item.time,
								topic: item.topic
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

					const valuseS1 = () => {
						if(item.s1 != null) {
							if(s1 === 0) {
								sets1(1)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: 1,
										s2: item.s2,
										s3: item.s3,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							else if(s1 === 1){
								sets1(0)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: 0,
										s2: item.s2,
										s3: item.s3,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							}
						else if(item.s1 === null)
							sets1(null)
						}

					const valuseS2 = () => {
						if(item.s2 != null) {
							if(s2 === 0) {
								sets2(1)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: 1,
										s3: item.s3,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							else if(s2 === 1){
								sets2(0)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: 0,
										s3: item.s3,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							}
						else if(item.s2 === null)
							sets2(null)
						}

					const valuseS3 = () => {
						if(item.s3 != null) {
							if(s3 === 0) {
								sets3(1)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: item.s2,
										s3: 1,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							else if(s3 === 1){
								sets3(0)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: item.s2,
										s3: 0,
										s4: item.s4,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							}
						else if(item.s3 === null)
							sets3(null)
						}

					const valuseS4 = () => {
						if(item.s4 != null) {
							if(s4 === 0) {
								sets4(1)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: item.s2,
										s3: item.s3,
										s4: 1,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							else if(s4 === 1){
								sets4(0)
								fetch(baseURL + item.id, {
									method: 'PUT',
									body: JSON.stringify({
										data: item.data,
										id: item.id,
										name: item.name,
										s1: item.s1,
										s2: item.s2,
										s3: item.s3,
										s4: 0,
										time: item.time,
										topic: "esp8266/led"
										}),
									headers: {
										'Content-type': 'application/json',
										},
									}).then((response) => response.json()).then((result) => {
									console.log("Light ON")
									setStatus(true)
									getData()
									}).catch((err) => {
										console.log(err.message)
									});
								}
							}
						else if(item.s4 === null)
							sets4(null)
						}

					const onToggle = () => {
						if (status === false) {
							fetch(baseURL + item.id, {
								method: 'PUT',
								body: JSON.stringify({
									data: item.data,
									id: item.id,
									name: item.name,
									s1: 1,
									s2: 1,
									s3: 1,
									s4: 1,
									time: item.time,
									topic: "esp8266/led"
									}),
								headers: {
									'Content-type': 'application/json',
									},
								}).then((response) => response.json()).then((result) => {
								console.log("Light ON")
								setStatus(true)
								getData()
								}).catch((err) => {
									console.log(err.message)
								});
							}
						else if (status === true) {
							fetch(baseURL + item.id, {
								method: 'PUT',
								body: JSON.stringify({
									data: item.data,
									id: item.id,
									name: item.name,
									s1: 0,
									s2: 0,
									s3: 0,
									s4: 0,
									time: item.time,
									topic: "esp8266/led"
									}),
								headers: {
									'Content-type': 'application/json',
									},
								}).then((response) => response.json()).then((result) => {
								console.log("Device OFF")
								setStatus(false)
								getData()
								}).catch((err) => {
									console.log(err.message)
								});
							}
						}

				return(
					<div className='lightContainer' key={index}>
						<Box className='switchBox' bgcolor={item.s1 || item.s2 || item.s3 || item.s4 === 1 ? '#ffb833' : '#424242'}>
							<Box className="switchSubBox">
								<TbBulbFilled className="icon"/>
								<span className="subtitle">{item.name}</span>
								<Switch
									style={{
										margin:'inherit',
										width: '60px',
										height: '24px',
										backgroundColor: '#252525',
										float:'right'
									}}
									className="toggleSwitch"
									checkedChildren='ON'
									unCheckedChildren='OFF'
									checked={item.s1 || item.s2 || item.s3 || item.s4 === 1 ? true : false}
									onChange={onToggle}
									/>
								</Box>
								<div className="switchSubBox">
									<div>
										<input type="checkbox" onClick={valuseS1} checked={item.s1 === 1 ? true : false} />
										<input type="checkbox" onClick={valuseS2} checked={item.s2 === 1 ? true : false} />
										<input type="checkbox" onClick={valuseS3} checked={item.s3 === 1 ? true : false} />
										<input type="checkbox" onClick={valuseS4} checked={item.s4 === 1 ? true : false} />
									</div>
									<i className="subButton" onClick={valuseS1}>{item.s1}</i>
									<i className="subButton" onClick={valuseS2}>{item.s2}</i>
									<i className="subButton" onClick={valuseS3}>{item.s3}</i>
									<i className="subButton" onClick={valuseS4}>{item.s4}</i>
								</div>
							</Box>
						</div>
					)
				}
			):null}
			</div>
		</>
		);
	}