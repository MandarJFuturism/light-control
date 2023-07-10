/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import '../css/form.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useSnackbar } from 'react-simple-snackbar'

export default function AddRoom() {

	const [data, setdata] = useState([])
	const [id, setId] = useState("")
	const [room, setRoom] = useState("")

	const [reqId, setreqId] = useState("")
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
		};

	const handleClick = () => {
		setOpen(true);
		handleClose();
	};

	useEffect(() => {
		getData();
		}, [])

	const getData = () => {
		fetch("http://localhost:3005/Rooms").then((response) => response.json())
			.then((result) => {
				setdata(result)
			})
		}

	const submit = (e) => {
		e.preventDefault();
		resetErrorMessage();
		if (Validate()) {
			if (btnText === "Submit") {
				fetch('http://localhost:3005/Rooms/', {
					method: 'POST',
					body: JSON.stringify({
						id:id,
						room: room,
					}),
					headers: {
						'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
					// alert("Record inserted")
					openSnackbar('New Room added',2000)
					getData()
					resetform();
					resetErrorMessage();
				})
			}
		}
		handleClose();
		console.log(room)
	}

	const Validate = () => {
		if (id.trim() === "") setreqId("required")
		if (room.trim() === "") setreqRoom("required")
		else return true
		}

	const resetErrorMessage = () => {
		setreqId(""); 
		setreqRoom("");
		}

	const resetform = () => {
		setId(""); 
		setbtnText("Submit");
		}

	return (
		<div className='form-container'>
			<Form onSubmit={submit} className='form'>
				<a className='form--title'>Add new Room</a>
				<Form.Group className="">
					<Form.Label className='form--label'>Room name</Form.Label>
					<Form.Control 
						value={room}
						name="Room name"
						onChange={(e) => setRoom(e.target.value)}
						className='form--input' placeholder='Room Name'/>
					
						{reqRoom === "required" && <span className="error">Please enter Room Name</span>}
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
