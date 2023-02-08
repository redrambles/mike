import { useState } from "react";
import { useAppContext } from "../../context";

const EditClientForm = ({ client, setEditing }) => {
  const { updateClient } = useAppContext();

	const [formElements, setFormElements] = useState({
		name: client.name,
		type: client.type,
		description: client.description,
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		return setFormElements((prevElements) => {
			return { ...prevElements, [name]: value };
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const { name, type, description } = formElements;
		const numId = Number(client.id);
		// TODO - Add validation for form - all inputs must be filled out
		updateClient(numId, name, type, description);
		setEditing(false);
	};

	return (
		<form className='client-form' onSubmit={handleFormSubmit}>
			<button className='btn close-btn' onClick={() => setEditing(false)}>
				X
			</button>
			<div className='form-group'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input type='text' name='name' value={formElements.name} onChange={handleFormChange} />
			</div>
			<div className='form-group'>
				<label className='form-label' htmlFor='type'>
					Type
				</label>
				<input type='text' name='type' value={formElements.type} onChange={handleFormChange} />
			</div>
			<div className='form-group'>
				<label className='form-label' htmlFor='description'>
					Description
				</label>
				<textarea name='description' value={formElements.description} onChange={handleFormChange} />
			</div>
			<button className='btn btn-primary' type='submit'>
				Save Changes
			</button>
		</form>
	);
};

export default EditClientForm;
