import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context";
import { useNavigate } from "react-router";

// Work on updateProject functionality - and wire up Edit button

const SingleProject = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	const { projects, updateProject, deleteResource } = useAppContext();
	const project = projects?.find((project) => project.id === Number(id));
	const [editing, setEditing] = useState(false);

	const handleDelete = () => {
		deleteResource("project", project?.id);
		navigate("/projects");
	};

	return (
		<article className='view-project project-details'>
			<div className='buttons'>
				<button className='btn'>Edit</button>
				<button className='btn delete-btn' onClick={handleDelete}>
					Delete
				</button>
			</div>
			<h5> {project?.name} </h5>
			<p> {project?.client} </p>
			<Link className='btn' to='/projects'>
				All Projects
			</Link>
		</article>
	);
};

export default SingleProject;
