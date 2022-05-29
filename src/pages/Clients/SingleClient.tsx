import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useAppContext } from "../../context";
import EditClientForm from "./EditClientForm";

const SingleClient = () => {
	const { id } = useParams();
	const { clients, deleteResource } = useAppContext();
	const [editing, setEditing] = useState(false);
	let navigate = useNavigate();

	// Get this client according to the url parameter (id)
	const client = clients.find((client) => client.id === Number(id));

	const handleDelete = () => {
		deleteResource("client", client.id);
		navigate("/clients");
	};

	return (
		<section className='section client-details'>
			{editing ?
			  <EditClientForm client={client} setEditing={setEditing}/>
				:
				<article className="view-client">
					<div className="buttons">
					<button className='btn edit-btn' onClick={() => setEditing(true)}>
						Edit
					</button>
					<button className='btn delete-btn' onClick={handleDelete}>
						Delete
					</button>
					</div>
					<h5> {client?.name} </h5>
					<p> {client?.type} </p>
					<p className='description'>{client?.description}</p>
					<Link className='btn' to='/clients'>
						All Clients
					</Link>
				</article>
			}
		</section>
	);
};

export default SingleClient;
