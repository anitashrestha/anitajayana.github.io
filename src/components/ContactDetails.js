const ContactDetails = (props) => {
	const userData = props.userData;
	return (
		<>
			<div className="contact-details-card">
				<div className="user-image">
					<img
						alt="user"
						src="images/userImage.png"
						className="user-pic responsive"
					/>
				</div>
				<div className="user-detail-table">
					<h2> {userData.name}</h2>
					<table className="table table-user-information">
						<tbody>
							<tr>
								<td>Username</td>
								<td>{userData.username}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>
									<a href="mailto:info@support.com">{userData.email}</a>
								</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>
									{userData.address.street}, {userData.address.suite},
									{userData.address.city}, {userData.address.zipcode}
								</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>{userData.phone}</td>
							</tr>
							<tr>
								<td>Website</td>
								<td>{userData.website}</td>
							</tr>
							<tr>
								<td>Company</td>
								<td>{userData.company.name}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ContactDetails;
