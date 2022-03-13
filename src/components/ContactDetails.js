import "../assets/css/contact-details.css";
import userImage from "../assets/images/userImage.png";

const ContactDetails = (props) => {
	const userDetails = props.userDetails;
	return (
		<>
			<div className="contact-details-card">
				<div className="user-image">
					<img alt="user" src={userImage} className="user-pic responsive" />
				</div>
				<div className="user-detail-table">
					<h2> {userDetails.name}</h2>
					<table className="table table-user-information">
						<tbody>
							<tr>
								<td>Username</td>
								<td>{userDetails.username}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>
									<a href="mailto:info@support.com">{userDetails.email}</a>
								</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>
									{userDetails.address.street}, {userDetails.address.suite},
									{userDetails.address.city}, {userDetails.address.zipcode}
								</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>{userDetails.phone}</td>
							</tr>
							<tr>
								<td>Website</td>
								<td>{userDetails.website}</td>
							</tr>
							<tr>
								<td>Company</td>
								<td>{userDetails.company.name}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ContactDetails;
