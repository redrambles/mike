import {Link, useParams} from 'react-router-dom';
import { clients } from '../data';

const SingleClient = () => {
  const { id } = useParams()
  const client = clients.find(client => client.id === Number(id))

  return (
    <section className='section client-details'>
      <h5> {client?.name} </h5>
      <p> {client?.type} </p>
      <p className="description">{client?.description}</p>
      <Link className="btn" to='/clients'>All Clients</Link>
    </section>
  );
};

export default SingleClient;
