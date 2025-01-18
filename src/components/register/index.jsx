import React, { useState } from "react";

import "./register.scss";
import removeIcon from "../../images/icon-remove-item.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/registerSlice";

function Register() {
	const [showModal, setShowModal] = useState(false);
	const [showRegisterButton, setShowRegisterButton] = useState(true);
	const userData = useSelector((store) => store.register);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(setUserData({ name, value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowModal(false);
		setShowRegisterButton(false);
	};

	return (
		<div className="register">
			{showRegisterButton ? (
				<button className="register-btn" onClick={() => setShowModal(true)}>
					Register
				</button>
			) : (
				<p className="user-name">
					<span>Hello,</span>
					{userData.name}
				</p>
			)}

			{showModal && (
				<>
					<div className="overlay"></div>

					<div className="register-modal">
						<div className="modal-head">
							<h2>Register</h2>
							<img
								src={removeIcon}
								className="remove-icon"
								alt="remove icon"
								onClick={() => setShowModal(false)}
							/>
						</div>

						<form className="modal-form" onSubmit={handleSubmit}>
							<div className="name-surname-wrapper">
								<div className="name">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={userData.name}
										onChange={handleChange}
									/>
								</div>

								<div className="surname">
									<label htmlFor="surname">Surname</label>
									<input
										type="text"
										id="surname"
										name="surname"
										value={userData.surname}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="city-country-wrapper">
								<div className="city">
									<label htmlFor="city">City</label>
									<input
										type="text"
										id="city"
										name="city"
										value={userData.city}
										onChange={handleChange}
									/>
								</div>

								<div className="country">
									<label htmlFor="country">Country</label>
									<input
										type="text"
										id="country"
										name="country"
										value={userData.country}
										onChange={handleChange}
									/>
								</div>
							</div>

							<button className="submit-btn" type="submit">
								Submit
							</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
}

export { Register };
