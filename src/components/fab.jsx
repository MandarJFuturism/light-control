import * as React from 'react';
import { useState } from 'react';
import { Fab } from '@mui/material';
import Popup from 'reactjs-popup';
import { RxCrossCircled } from 'react-icons/rx';
import AddDevice from './addDevice';
import {AiOutlineFileAdd} from 'react-icons/ai'

export default function FAB() {
	const [open, setOpen] = useState(false);  
	const closeModal = () => setOpen(false);

	return(
		<>
			<Fab onClick={() => setOpen(o => !o)} style={{backgroundColor:'#ffb833'}} aria-label="add">
				<AiOutlineFileAdd style={{fontSize:'30px'}}/>
			</Fab>

			<Popup
				open={open} 
				closeOnDocumentClick onClose={closeModal}
				className='popup-overlay'
			>
			<div>
				<RxCrossCircled className='btn-close' type='button' onClick={closeModal} />
				<AddDevice/>
			</div>
			</Popup>
		</>
	);
}