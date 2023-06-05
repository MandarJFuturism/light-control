import * as React from 'react';
import { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Popup from 'reactjs-popup';
import { AiOutlineClose } from 'react-icons/ai';
import AddDevice from './addDevice';

export default function FAB() {
	const [open, setOpen] = useState(false);  
	const closeModal = () => setOpen(false);

	return(
		<>
			<Fab onClick={() => setOpen(o => !o)} sx={{ p: 0 }} color="primary" aria-label="add">
				<AddIcon />
			</Fab>

			<Popup
				open={open} 
				closeOnDocumentClick onClose={closeModal}
				className='overlay'
			>
			<div>
				<AiOutlineClose type='button' onClick={closeModal} />
				<AddDevice/>
			</div>
			</Popup>
		</>
	);
}