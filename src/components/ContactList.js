import React, { useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";
import Popup from "./Popup";
import "../assets/css/contact-list.css";

const ContactTable = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [isPopupOpen, setPopupIsOpen] = useState(false);
	const [userDetails, setuserDetails] = useState({});

	const fetchData = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const contactList = users.map((user) => (
		<tr
			key={user.id}
			className="contact-row"
			onClick={() => {
				setuserDetails(user);
				setPopupIsOpen(!isPopupOpen);
			}}
		>
			<td>{user.name}</td>
			<td>{user.phone}</td>
			<td>{user.email}</td>
			<td>{user.website}</td>
		</tr>
	));

	return (
		<div className="main-container">
			<h1>Contact List</h1>
			<div className="container">
				{isLoading && <span>Loading...</span>}
				<table className="table-contact-list">
					<thead>
						<tr className="table-head">
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Website</th>
						</tr>
					</thead>
					{users.length > 0 && <tbody>{contactList}</tbody>}
				</table>
			</div>
			{isPopupOpen && (
				<Popup
					isOpen={isPopupOpen}
					setOpen={setPopupIsOpen}
					content={<ContactDetails userDetails={userDetails} />}
				/>
			)}
		</div>
	);
};

export default ContactTable;
