/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function Clock() {

	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	const [time, setTime] = useState({
		minutes: new Date().getMinutes(),
		hours: new Date().getHours(),
		seconds: new Date().getSeconds(),
		day: days[new Date().getDay()],
		date: new Date().getDate(),
		month: months[new Date().getMonth()],
		year: new Date().getFullYear()
		})
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			const date = new Date();
			setTime({
				minutes: date.getMinutes(),
				hours: date.getHours(),
				seconds: date.getSeconds(),
				day: days[date.getDay()],
				date: date.getDate(),
				month: months[date.getMonth()],
				year: date.getFullYear()
				})
			}, 1000)

		return () => clearInterval(intervalId);
			}, [])

	const convertToTwoDigit = (number) => {
		return number.toLocaleString('en-US', {
			minimumIntegerDigits: 2
			})
		}

	return (
		<>
			<div className='hms'>
				<span>{convertToTwoDigit(time.hours > 12 ? time.hours-12 : time.hours)}:</span>
				<span>{convertToTwoDigit(time.minutes)}:</span>
				<span>{convertToTwoDigit(time.seconds)}</span>
				<span className='ampm'>{time.hours >= 12 ? ' PM' : ' AM'}</span>
			</div>
			<div className='date'>
				<span>{time.date}&nbsp;</span>
				<span>{time.month},</span>
				<span> {time.year}&nbsp;</span>
			</div>
			<span className='day'>{time.day}</span>
		</>
		);
	}

export default Clock;