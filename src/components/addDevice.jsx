/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import '../css/form.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useSnackbar } from 'react-simple-snackbar'

export default function AddDevice() {

	const [data, setdata] = useState([])
	const [id, setId] = useState("")
	const [deviceId, setDeviceId] = useState("")
	const [device, setDevice] = useState("")
	const [deviceType, setDeviceType] = useState("")
	const [room, setRoom] = useState("")

	const [reqId, setreqId] = useState("")
	const [reqDeviceId, setreqDeviceId] = useState("")
	const [reqDevice, setreqDevice] = useState("")
	const [reqDeviceType, setreqDeviceType] = useState("")
	const [reqRoom, setreqRoom] = useState("")
	const [btnText, setbtnText] = useState("Submit")

	const [open, setOpen] = React.useState(false);
	
	const snackbarStyle = {
		position: 'bottom-right',
		style: {
			backgroundColor: '#252525',
			border: '1px solid #ffb833',
			color: '#ffb833',
			fontFamily: 'inherit',
			fontSize: '18px',
			textAlign: 'center',
			},
		closeStyle: {
			color: '#ffb833',
			fontSize: '16px',
			},
		}

	const [openSnackbar, closeSnackbar] = useSnackbar(snackbarStyle)

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
			}
		setOpen(false);
		// window.location.reload(false);
		};

	const handleClick = () => {
		setOpen(true);
		handleClose(false);
  	};

	useEffect(() => {
		getData();
		}, [])

	const getData = () => {
		fetch("http://localhost:3005/posts").then((response) => response.json())
			.then((result) => {
				setdata(result)
			})
		}

	const submit = (e) => {
		e.preventDefault();
		resetErrorMessage();
		if (Validate()) {
			if (btnText === "Submit") {
				fetch('http://localhost:3005/posts/', {
					method: 'POST',
					body: JSON.stringify({
						id: id,
						deviceId: deviceId,
						device: device,
						deviceType: deviceType,
						status : false,
						room: room,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
					// alert("Record inserted")
					openSnackbar('Device added')
					getData()
					resetform();
					resetErrorMessage();
				})
			}
		}
		handleClose();
		console.log(deviceId,device,deviceType,room)
	}

	const Validate = () => {
		if (id.trim() === "") setreqId("required")
		if (deviceId.trim() === "") setreqDeviceId("required")
		if (device.trim() === "") setreqDevice("required")
		if (deviceType.trim() === "") setreqDeviceType("required")
		if (room.trim() === "") setreqRoom("required")
		else return true
		}

	const resetErrorMessage = () => {
		setreqId("");
		setreqDeviceId("");
		setreqDevice("");
		setreqDeviceType("");
		setreqRoom("");
		}

	const resetform = () => {
		setId("");
		setDeviceId("");
		setDevice("");
		setDeviceType("");
		setRoom("");
		setbtnText("Submit");
		}

	return (
		<div className='form-container'>
			<Form onSubmit={submit} className='form'>
				<Form.Group className="">
					{/* <Form.Label className='form--label'>Device ID</Form.Label> */}
					<Form.Control 
						value={deviceId}
						name="Device ID"
						onChange={(e) => setDeviceId(e.target.value)}
						className='form--input' placeholder='Device ID'/>
						{reqDeviceId === "required" && <span className="error">Please enter id</span>}
				</Form.Group>

				<Form.Group>
					{/* <Form.Label className='form--label'>Device Name</Form.Label> */}
					<Form.Control 
						value={device}
						name="device"
						onChange={(e) => setDevice(e.target.value)}
						className='form--input' placeholder='Device Name'/>
						{reqDevice === "required" && <span className="error">Please enter device name</span>}
				</Form.Group>

				<Form.Group >
					{/* <Form.Label className='form--label'>Device Type</Form.Label> */}
					<Form.Select 
						value={deviceType}
						name="deviceType"
						onChange={(e) => setDeviceType(e.target.value)}
						placeholder="Select Type" className='form--select'>
						<option value="">Select Device type</option>
						<option value="Lights">Lights</option>
						<option value="Air Con">Air Con</option>
						<option value="Fan">Fan</option>
							{reqDeviceType === "required" && <span className="error">Please select Device Type</span>}
					</Form.Select>
				</Form.Group>

				<Form.Group >
					{/* <Form.Label className='form--label'>Room Name</Form.Label> */}
					<Form.Select 
						value={room}
						name="room"
						onChange={(e) => setRoom(e.target.value)}
						placeholder="Select Type" className='form--select'>
						<option value="">Select Room</option>
						<option value="Conference Room">Conference Room</option>
						<option value="Lobby Room">Lobby Room</option>
						<option value="Cabins">Cabins</option>
						<option value="Office Space">Office Space</option>
							{reqRoom === "required" && <span className="error">Please select Room</span>}
					</Form.Select>
				</Form.Group>

				<Button 
					value={btnText}
					type='submit'
					onClick={handleClick}
					className='button'>
					Submit
				</Button>
			</Form>
		</div>
	);
}
