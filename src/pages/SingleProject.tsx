import {Link, useParams} from 'react-router-dom';
// @ts-ignore
import { projects } from '../data';

const SingleProject = () => {
  const { id } = useParams()
  const project = projects?.find(project => project.id === Number(id))

  return (
    <section className='section project-details'>
      <h5> {project?.name} </h5>
      <p> {project?.type} </p>
      <Link className="btn" to='/projects'>All Projects</Link>
    </section>
  );
};

export default SingleProject;
