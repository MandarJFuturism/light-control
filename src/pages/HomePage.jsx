import React, {useState, useEffect} from 'react'
import '../css/homePage.scss'
import Weather from '../components/Weather';
import Clock from '../components/clock';
import { Divider,} from '@mui/material';
import RoomStats from '../components/roomStats';
import AddDevice from '../components/addDevice';
import Chart from '../components/dataChart';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";
import { Flex } from 'rebass';
const data = [
	{
		month: "January",
		conference: 2432,
		lobby: 5434,
		office: 7652,
		cabins: 1234
	},
	{
		month: "February",
		conference: 2344,
		lobby: 2341,
		office: 4135,
		cabins: 4231
	},
	{
		month: "March",
		conference: 4323,
		lobby: 2431,
		office: 532,
		cabins: 3124
	},
	{
		month: "April",
		conference: 3652,
		lobby: 5231,
		office: 2652,
		cabins: 1253
	},
	{
		month: "May",
		conference: 5462,
		lobby: 5233,
		office: 5346,
		cabins: 2342
	},
	{
		month: "June",
		conference: 6831,
		lobby: 3644,
		office: 4323,
		cabins: 6345
	},
	{
		month: "July",
		conference: 2435,
		lobby: 5436,
		office: 6345,
		cabins: 2534
	},
	{
		month: "August",
		conference: 6346,
		lobby: 5232,
		office: 2400,
		cabins: 546
	},
	{
		month: "September",
		conference: 6452,
		lobby: 3214,
		office: 876,
		cabins: 7893
	},
	{
		month: "October",
		conference: 4656,
		lobby: 6456,
		office: 321,
		cabins: 5464
	},
	{
		month: "November",
		conference: 8767,
		lobby: 3125,
		office: 1235,
		cabins: 456
	},
	{
		month: "December",
		conference: 8654,
		lobby: 456,
		office: 2400,
		cabins: 2400
	}
];

export default function Home() {
	const [selectRoom, setSelectedRoom] = useState("Lobby Room");
	return (
		<div className='wrapper'>
{/* Left side */}
			<div className='containerWrap'>

				<div className='welcomeWrapper'>
					<div className='text'>
						<h1>Welcome back,</h1>
						<h1>User</h1>
					</div>

					<Divider style={{marginLeft:'45px', marginRight:'10px'}} orientation="vertical" variant="middle" flexItem/>
					
					<div className='clock'>
						<Clock/>
					</div>
				</div>

				<div>
					<RoomStats/>
				</div>
			</div>
{/* Right side */}
			<div className='secondWrapper'>
				<div className='secondContainer'>
					<div className='status'>
						
						<div className='weather'>
							<span className='header'>Weather</span>
							<Weather/>
						</div>

					</div>

					<div>
						<span className='header'>Add Devices</span>
						<AddDevice/>
					</div>
				</div>

				<div className='chartContainer'>
					<div style={{display:'flex',flexDirection:'row'}}>
						<span className='header'>Energy Consumption</span>
						<div className='select-dropdown'>
								<select value={selectRoom} onChange={e => setSelectedRoom(e.target.value)}>
									<option value="">Select Room</option>
									<option value="conference">Conference Room</option>
									<option value="lobby">Lobby Room</option>
									<option value="cabins">Cabins</option>
									<option value="office">Office Space</option>
								</select>
							</div>
						</div>
					<div className='chart'>
						{/* <Chart/> */}
						<BarChart
							width={950}
							height={400}
							data={data}
							barSize={20}
							barCategoryGap={1}
							margin={{
								top: 20,
								right: 10,
								left: 10,
								bottom: 5
								}}
							>
							{/* <CartesianGrid strokeDasharray="3 3" /> */}
							<YAxis fontSize={13}/>
							<XAxis fontSize={13} type="category" padding={{ left: 10 }} dataKey="month"/>
							<Tooltip />
							<Legend />
							<Bar dataKey={selectRoom} fill="#116A7B" />
						</BarChart>
					</div>
				</div>

			</div>
		</div>
		);
	}