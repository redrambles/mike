import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context";

const SingleClient = () => {
	const { id } = useParams();
	const { clients, updateClient } = useAppContext();
	const [editing, setEditing] = useState(false);
	// Get this client accoriding to the url parameter (id)
	const client = clients.find((client) => client.id === Number(id));
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
		const numId = Number(id);
		updateClient(numId, name, type, description);
		setEditing(false);
	};

	return (
		<section className='section client-details'>
			{editing ? (
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
			) : (
				<div className="view-client">
					<button className='btn edit-btn' onClick={() => setEditing(true)}>
						Edit
					</button>
					<h5> {client?.name} </h5>
					<p> {client?.type} </p>
					<p className='description'>{client?.description}</p>
					<Link className='btn' to='/clients'>
						All Clients
					</Link>
				</div>
			)}
		</section>
	);
};

export default SingleClient;
