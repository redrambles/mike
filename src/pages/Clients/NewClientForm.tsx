import React, { useState } from "react";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context";

const NewClientForm = ({ setShowForm }) => {
	const { addClient } = useAppContext();
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState("")
	const [formElements, setFormElements] = useState({
		name: "",
		type: "",
		description: "",
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		return setFormElements((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const resetForm = () => {
		setFormElements({
			name: "",
			type: "",
			description: "",
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const { name, type, description } = formElements;
		if (name && type && description) {
			addClient(formElements);
			setShowForm(false);
			resetForm();
		} else {
			setMessage("Please fill out all the inputs")
			setShowMessage(true);
		}
	};

	return (
		<form className='client-form' onSubmit={handleFormSubmit}>
			{showMessage && <Alert duration={2000} message={message} setShowMessage={setShowMessage} />}
			<button className='btn close-btn' onClick={() => setShowForm(false)}>
				X
			</button>
			<div className='form-group'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input id='name' className='form-input' name='name' type='text' value={formElements.name} onChange={handleFormChange} />
			</div>
			<div className='form-group'>
				<label className='form-label' htmlFor='type'>
					Type
				</label>
				<input id='type' name='type' className='form-input' type='text' value={formElements.type} onChange={handleFormChange} />
			</div>
			<div className='form-group'>
				<label className='form-label' htmlFor='description'>
					Description
				</label>
				<textarea
					id='description'
					className='form-input'
					name='description'
					value={formElements.description}
					onChange={handleFormChange}
				/>
			</div>
			<button className='btn btn-primary' type='submit'>
				Add Client
			</button>
		</form>
	);
};

export default NewClientForm;
