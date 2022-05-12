import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAppContext } from "../context";

function Clients() {
	const { clients, addClient } = useAppContext();
	const [showForm, setShowForm] = useState(false);
	const [message, showMessage] = useState("");
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


	const handleFormSubmit = (e) => {
		e.preventDefault();
		const { name, type, description } = formElements;
		if (name && type && description) {
			addClient(formElements);
			setShowForm(false);
			setFormElements({
				name: "",
				type: "",
				description: "",
			});
		} else {
			showMessage("Please fill in all fields");
		}
	};

	return (
		<section>
      <header className="client-header">
        <h2>Clients</h2>
        {!showForm &&
          <button className='btn' onClick={() => setShowForm(true)}>
              +
          </button>
      }
      </header>
      {showForm && (
				<>
					{message && <Alert duration={2000} message={message} showMessage={showMessage} />}
					<form className="client-form" onSubmit={handleFormSubmit}>
              <button className="btn close-btn" onClick={() => setShowForm(false)}>X</button>
							<div className='form-group'>
								<label className='form-label' htmlFor='name'>
									Name
								</label>
								<input
									id='name'
									className='form-input'
									name='name'
									type='text'
									value={formElements.name}
									onChange={handleFormChange}
								/>
							</div>
							<div className='form-group'>
								<label className='form-label' htmlFor='type'>
									Type
								</label>
								<input
									id='type'
									name='type'
									className='form-input'
									type='text'
									value={formElements.type}
									onChange={handleFormChange}
								/>
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
				</>
      )}

			{clients.map((client) => (
				<div key={client.id} className='client-summary'>
					<h4>{client.name}</h4>
					<Link className='btn btn-light' to={`/clients/${client.id}`}>
						Details
					</Link>
				</div>
			))}
		</section>
	);
}

export default Clients;
