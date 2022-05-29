import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewClientForm from "./NewClientForm";
import { useAppContext } from "../context";

function Clients() {
	const { clients } = useAppContext();
	const [showForm, setShowForm] = useState(false);


	return (
		<section>

			<header className='client-header'>
				<h2>Clients</h2>
				{!showForm && (
					<button className='btn' onClick={() => setShowForm(true)}>
						+
					</button>
				)}
			</header>

			{showForm && <NewClientForm setShowForm={setShowForm}/>}

			{clients
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((client) => (
					<article key={client.id} className='client-summary'>
						<h4>{client.name}</h4>
						<Link className='btn btn-light' to={`/clients/${client.id}`}>
							Details
						</Link>
					</article>
				))}
		</section>
	);
}

export default Clients;
