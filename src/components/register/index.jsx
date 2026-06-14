import { useState } from "react";

import "./register.css";
import closeIcon from "/images/icon-remove-item.svg";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterSuccess, setUserData } from "../../store/registerSlice";

function Register() {
	const { name, surname, city, country, isRegistered } = useSelector((state) => state.register);
	const dispatch = useDispatch();

	const [showRegisterModal, setShowRegisterModal] = useState(false);
	const [showError, setShowError] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		city: "",
		country: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, surname, city, country } = formData;

		if (name.trim() && surname.trim() && city.trim() && country.trim()) {
			setShowRegisterModal(false);
			dispatch(setUserData(formData));
			dispatch(setRegisterSuccess());
		} else {
			setShowError(true);
		}
	};

	const closeRegisterModal = () => {
		setShowRegisterModal(false);
		setShowError(false);
		setFormData({ name: "", surname: "", city: "", country: "" });
	};

	return (
		<div className="register">
			{isRegistered ? (
				<p className="greetings">
					<span className="greetings-word">Welcome,</span>
					{formData.name}
				</p>
			) : (
				<button className="register-button" onClick={() => setShowRegisterModal(true)}>
					Register
				</button>
			)}

			{showRegisterModal && (
				<>
					<div className="overlay" onClick={closeRegisterModal}></div>

					<div className="register-modal">
						<div className="modal-head">
							<p className="register-modal-title">Register</p>

							<button
								className="close-modal-button"
								onClick={closeRegisterModal}
								aria-label="Close register modal."
							>
								<img src={closeIcon} className="close-icon" alt="" />
							</button>
						</div>

						<form className="modal-form" onSubmit={handleSubmit}>
							{showError && <p className="error-message">Each field is required!</p>}

							<div className="name-surname-wrapper">
								<div className="name">
									<label htmlFor="name">Name</label>
									<input type="text" id="name" name="name" onChange={handleChange} value={name} />
								</div>

								<div className="surname">
									<label htmlFor="surname">Surname</label>
									<input type="text" id="surname" name="surname" onChange={handleChange} value={surname} />
								</div>
							</div>

							<div className="city-country-wrapper">
								<div className="city">
									<label htmlFor="city">City</label>
									<input type="text" id="city" name="city" onChange={handleChange} value={city} />
								</div>

								<div className="country">
									<label htmlFor="country">Country</label>
									<input type="text" id="country" name="country" onChange={handleChange} value={country} />
								</div>
							</div>

							<button className="submit-button">Submit</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
}

export { Register };
