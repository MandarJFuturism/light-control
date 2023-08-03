/* eslint-disable react/style-prop-object */
import React from "react";
import '../css/checkbox.scss'
import PropTypes from "prop-types";
// import { AiOutlinePoweroff } from "react-icons/ai";

const Checkbox = ({type = "checkbox", name, checked = false, onChange
	}) =>
	<div>
		<label class="theme">
			<input class="input" type={type} name={name} checked={checked} onChange={onChange} />
			<svg class="icon power-on" height="200px" width="200px" version="1.1" id="Layer_1" viewBox="0 0 512 512" fill="#000000">
				<g id="SVGRepo_bgCarrier" stroke-width="0"/>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
				<g id="SVGRepo_iconCarrier">
					<g> 
						<path style={{fill:"#64C37D"}} d="M256,512C114.842,512,0,397.158,0,256S114.842,0,256,0s256,114.842,256,256S397.158,512,256,512z M256,54.857C145.09,54.857,54.857,145.09,54.857,256S145.09,457.143,256,457.143S457.143,366.91,457.143,256 S366.91,54.857,256,54.857z"/> 
						<path style={{fill:"#64C37D"}} d="M256,374.857c-15.148,0-27.429-12.281-27.429-27.429V164.571c0-15.148,12.281-27.429,27.429-27.429 c15.148,0,27.429,12.281,27.429,27.429v182.857C283.429,362.576,271.148,374.857,256,374.857z"/> 
					</g>
				</g>
			</svg>

			<svg class="icon power-off" height="200px" width="200px" version="1.1" id="Layer_1"  viewBox="0 0 512 512" fill="#000000">
				<g id="SVGRepo_bgCarrier" stroke-width="0"/>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
				<g id="SVGRepo_iconCarrier">
					<g>
						<path style={{fill:"#fe2929"}} d="M256,512C114.842,512,0,397.158,0,256S114.842,0,256,0s256,114.842,256,256S397.158,512,256,512z M256,54.857C145.09,54.857,54.857,145.09,54.857,256S145.09,457.143,256,457.143S457.143,366.91,457.143,256 S366.91,54.857,256,54.857z"/>
						<path style={{fill:"#fe2929"}} d="M256,374.857c-15.148,0-27.429-12.281-27.429-27.429V164.571c0-15.148,12.281-27.429,27.429-27.429 c15.148,0,27.429,12.281,27.429,27.429v182.857C283.429,362.576,271.148,374.857,256,374.857z"/>
					</g>
				</g>
			</svg>
		</label>
	</div> 
	;

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired
	};

export default Checkbox;
