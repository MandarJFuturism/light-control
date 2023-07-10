/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import '../css/form.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {FiTrash, FiEdit} from 'react-icons/fi';

import { useSnackbar } from 'react-simple-snackbar'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';

import Paper from '@mui/material/Paper';
import Popup from 'reactjs-popup';
import '../css/table.scss'

export default function Devices() {

	const [data, setdata] = useState([])
	const [id, setId] = useState("")
	const [deviceId, setDeviceId] = useState("")
	const [device, setDevice] = useState("")
	const [deviceType, setdeviceType] = useState("")
	const [room, setRoom] = useState("")
	const [status, setStatus] = useState("")

	const [reqId, setreqId] = useState("")
	const [reqDeviceId, setreqDeviceId] = useState("")
	const [reqDevice, setreqDevice] = useState("")
	const [reqDeviceType, setreqDeviceType] = useState("")
	const [reqRoom, setreqRoom] = useState("")

	const [open, setOpen] = useState(false);  
	const closeModal = () => setOpen(false);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	
	const snackbarStyle = {
		position: 'bottom-right',
		style: {
			backgroundColor: '#252525',
			border: '1px solid #ffb833',
			color: '#ffb833',
			fontSize: '18px',
			textAlign: 'center',
			},
		closeStyle: {
			color: '#ffb833',
			fontSize: '16px',
			},
		}

	const [openSnackbar, closeSnackbar] = useSnackbar(snackbarStyle)

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
		};

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

	const [btnText, setbtnText] = useState("editSubmit")

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
		if (btnText === "editSubmit") {
			fetch('http://localhost:3005/posts/', {
				method: 'POST',
				body: JSON.stringify({
					id: id,
					deviceId: deviceId,
					device: device,
					deviceType: deviceType,
					status: false,
					room: room,
					}),
				headers: {
					'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
				// alert("Record inserted")
				openSnackbar('New Device added')
				getData()
				resetform();
				resetErrorMessage();
				})
			}

		else {
			fetch('http://localhost:3005/posts/' + id, {
				method: 'PUT',
				body: JSON.stringify({
					deviceId: deviceId,
					device: device,
					deviceType: deviceType,
					status: false,
					room: room,

					}),
				headers: {
					'Content-type': 'application/json',
					},
				}).then((response) => response.json()).then((result) => {
				// alert("Record updated")
				openSnackbar('Device reocrd Updated',2000)
				getData()
				resetform();
				resetErrorMessage();
				})
			}
		handleClose();
		console.log(device,deviceType,room)
		}

	const Validate = () => {
		if (id.trim() === '') setreqId('required')
		if (device.trim() === '') setreqDevice('required')
		if (deviceId.trim() === '') setreqDeviceId('required')
		if (deviceType.trim() === '') setreqDeviceType('required')
		if (room.trim() === '') setreqRoom('required')
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
		setdeviceType(""); 
		setRoom(""); 
		setStatus(""); 
		setbtnText("editSubmit");
		}

	const deleterecord = (id) => {
		fetch("http://localhost:3005/posts/" + id, { method: 'DELETE' }).then((response) => response.json())
			.then((result) => {
				openSnackbar('Device Deleted',2000)
				getData()
			})
		}

	const editrecord = (item) => {
		setId(item.id)
		setDeviceId(item.deviceId)
		setDevice(item.name)
		setdeviceType(item.deviceType)
		setRoom(item.room)
		setbtnText("Update")
		}

	return (
		<Paper className='table-container'>
			 <TableContainer component={Paper} sx={{maxHeight:800}}>
				<Table stickyHeader aria-label="sticky table">

					<TableHead>
						<TableRow className='table-row'>
							<TableCell align="center">ID</TableCell>
							<TableCell align="center">Device ID</TableCell>
							<TableCell align="center">Device Name</TableCell>
							<TableCell align="center">Type</TableCell>
							<TableCell align="center">Room</TableCell>
							<TableCell colSpan={2} align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					
					<TableBody>
						{data ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) =>
							<TableRow key={index}>
								<TableCell align="center">{item.id} </TableCell>
								<TableCell align="center">{item.deviceId} </TableCell>
								<TableCell align="center">{item.device} </TableCell>
								<TableCell align="center">{item.deviceType}</TableCell>
								<TableCell align="center"> {item.room}</TableCell>
								<Popup
									trigger={
										<TableCell align="right">
											<FiEdit
												type='button' 
												onClick={(e) => { editrecord(item) }}
												style={{color:'#ffbf00', cursor:'pointer', fontSize:'25px'}}
												/>
										</TableCell>} 
									modal nested>

									<Form onSubmit={submit} className='form'>
										<b className='form--title'>Edit Device</b>
										<Form.Group className="">
											<Form.Label className='form--label'>Device ID</Form.Label>
											<Form.Control 
												value={deviceId}
												name="deviceId"
												onChange={(e) => setDeviceId(e.target.value)}
												className='form--input' placeholder='Device ID'/>
											<br />
												{reqDeviceId === "required" && <span className="error">Please enter id</span>}
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
								</Popup>

								<TableCell align="left"> 
									<FiTrash 
										type='button' 
										onClick={(e) => { deleterecord(item.id) }}
										style={{color:'#FF0800', cursor:'pointer', fontSize:'25px'}}
										/>
								</TableCell>
							</TableRow>
						) : null}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 15]}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>

		</Paper>
		);
	}
