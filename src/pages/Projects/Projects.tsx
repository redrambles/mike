import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context";
import NewProjectForm from "./NewProjectForm";

function Projects() {
	const { projects, addProject, clients } = useAppContext();
	const [showForm, setShowForm] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [formElements, setFormElements] = useState({
		name: "",
		client: "Choose client",
	});

	const resetForm = () => {
		setFormElements({
			name: "",
			client: "Choose client",
		});
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		return setFormElements((prevElements) => {
			return { ...prevElements, [name]: value };
		});
	};

	const closeForm = () => {
		setShowForm(false);
		resetForm();
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (formElements.name && formElements.client !== "Choose client") {
			addProject(formElements);
			setShowForm(false);
			resetForm();
		} else {
			setShowMessage(true);
		}
	};

	return (
		<section>
			<h2>Projects</h2>
			{showMessage && <Alert message='Please fill out all the fields' setShowMessage={setShowMessage} />}
			{showForm ? <NewProjectForm formElements={formElements} clients={clients} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} closeForm={closeForm}/>
				: (
				<button className='btn' onClick={() => setShowForm(true)}>
					Add Project
				</button>
			)}
			{projects
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((project) => (
					<article key={project.id} className='project-summary'>
						<h4>{project.name}</h4>
						<Link to={`/projects/${project.id}`}>Details</Link>
					</article>
				))}
		</section>
	);
}

export default Projects;
