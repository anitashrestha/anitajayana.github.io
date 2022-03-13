import React from "react";
import "../assets/css/contact-details.css";

const ContactDetails = (props) => {
	return (
		<div className="popup-box">
			<div className="box">
				<span
					className="close-icon"
					onClick={() => props.setOpen(!props.isOpen)}
				>
					x
				</span>
				{props.content}
			</div>
		</div>
	);
};

export default ContactDetails;
