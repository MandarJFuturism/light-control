import React from "react"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from "recharts";

const data = [
	{
		month: "January",
		conference: 2432,
		lobby: 5434,
		office: 7652,
		cabin: 1234
	},
	{
		month: "February",
		conference: 2344,
		lobby: 2341,
		office: 4135,
		cabin: 4231
	},
	{
		month: "March",
		conference: 4323,
		lobby: 2431,
		office: 532,
		cabin: 3124
	},
	{
		month: "April",
		conference: 3652,
		lobby: 5231,
		office: 2652,
		cabin: 1253
	},
	{
		month: "May",
		conference: 5462,
		lobby: 5233,
		office: 5346,
		cabin: 2342
	},
	{
		month: "June",
		conference: 6831,
		lobby: 3644,
		office: 4323,
		cabin: 6345
	},
	{
		month: "July",
		conference: 2435,
		lobby: 5436,
		office: 6345,
		cabin: 2534
	},
	{
		month: "August",
		conference: 6346,
		lobby: 5232,
		office: 2400,
		cabin: 546
	},
	{
		month: "September",
		conference: 6452,
		lobby: 3214,
		office: 876,
		cabin: 7893
	},
	{
		month: "October",
		conference: 4656,
		lobby: 6456,
		office: 321,
		cabin: 5464
	},
	{
		month: "November",
		conference: 8767,
		lobby: 3125,
		office: 1235,
		cabin: 456
	},
	{
		month: "December",
		conference: 8654,
		lobby: 456,
		office: 2400,
		cabin: 2400
	}
];

export default function Chart() {
	return (
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
			<Bar dataKey="conference" fill="#116A7B" />
			<Bar dataKey="lobby" fill="#F675A8" />
			<Bar dataKey="office" fill="#F29393" />
			<Bar dataKey="cabin" fill="#B2A4FF" />
		</BarChart>
		);
	}
