/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import '../css/form.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// import { Select } from '@mui/material';
// import TextField from '@mui/material';

export default function AddDevice() {

	const [data, setdata] = useState([])
	const [id, setId] = useState("")
	const [device, setDevice] = useState("")
	const [deviceType, setdeviceType] = useState("")
	const [room, setRoom] = useState("")

	const [reqId, setreqId] = useState("")
	const [reqDevice, setreqDevice] = useState("")
	const [reqDeviceType, setreqDeviceType] = useState("")
	const [reqRoom, setreqRoom] = useState("")

	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
			}
		setOpen(false);
		};

	const handleClick = () => {
    setOpen(true);
		handleClose();
  };

	const action = (
		<React.Fragment>
			<Button className='' size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	function alertPopup() {
		return(
			<Snackbar
				open={open}
				autoHideDuration={2000}
				message="Device Added successfully"
			/>
			)
		}

	const [btnText, setbtnText] = useState("Submit")

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
						device: device,
						deviceType: deviceType,
						room: room,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
					alert("Record inserted")
					getData()
					resetform();
					resetErrorMessage();
				})
			}

			else {
				fetch('http://localhost:3005/posts/' + id, {
					method: 'PUT',
					body: JSON.stringify({
						device: device,
						deviceType: deviceType,
						room: room,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
					alert("Record updated")
					getData()
					resetform();
					resetErrorMessage();
				})
			}
		}
		console.log(device,deviceType,room)
	}

	const Validate = () => {
		if (id.trim() === "") setreqId("required")
		 if (device.trim() === "") setreqDevice("required")
		 if (deviceType.trim() === "") setreqDeviceType("required")
		 if (room.trim() === "") setreqRoom("required")
		else return true
		}

	const resetErrorMessage = () => {
		setreqId(""); 
		setreqDevice(""); 
		setreqDeviceType(""); 
		setreqRoom("");
		}

	const resetform = () => {
		setId(""); 
		setDevice(""); 
		setdeviceType(""); 
		setRoom(""); 
		setbtnText("Submit");
		}

	const deleterecord = (id) => {
		fetch("http://localhost:3005/posts/" + id, { method: 'DELETE' }).then((response) => response.json())
			.then((result) => {
				alert("Record deleted")
				getData()
			})
		}

		const editrecord = (item) => {
			setId(item.id)
			setDevice(item.name)
			setdeviceType(item.country)
			setRoom(item.comment)
			setbtnText("Update")
			}

	return (
		<div className='form-container'>
			<Form  onSubmit={submit} className='form'>
				<Form.Group className="">
					<Form.Label className='form--label'>Device ID</Form.Label>
					<Form.Control 
						value={id}
						name="id"
						onChange={(e) => setId(e.target.value)}
						className='form--input' placeholder='ID'/>
					<br />
						{reqId === "required" && <span className="error">Please enter id</span>}
				</Form.Group>

				<Form.Group>
					<Form.Label className='form--label'>Device Name</Form.Label>
					<Form.Control 
						value={device}
						name="device"
						onChange={(e) => setDevice(e.target.value)}
						className='form--input' placeholder='Device Name'/>
					<br />
						{reqDevice === "required" && <span className="error">Please enter device name</span>}
				</Form.Group>

				<Form.Group >
					<Form.Label className='form--label'>Device Type</Form.Label>
					<Form.Select 
						value={deviceType}
						name="deviceType"
						onChange={(e) => setdeviceType(e.target.value)}
						placeholder="Select Type" className='form--select'>
						<option>Select Device type</option>
						<option value="Lights">Lights</option>
						<option value="Air Con">Air Con</option>
						<option value="Fan">Fan</option>
						<br />
							{reqDeviceType === "required" && <span className="error">Please select Device Type</span>}
					</Form.Select>
				</Form.Group>

				<Form.Group >
					<Form.Label className='form--label'>Room Name</Form.Label>
					<Form.Select 
						value={room}
						name="room"
						onChange={(e) => setRoom(e.target.value)}
						placeholder="Select Type" className='form--select'>
						<option>Select Room</option>
						<option value="Conference Room">Conference Room</option>
						<option value="Lobby Room">Lobby Room</option>
						<option value="Cabins">Cabins</option>
						<option value="Office Space">Office Space</option>
						<br />
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
