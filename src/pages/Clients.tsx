import React from 'react'
import { Link } from 'react-router-dom'
import { clients } from '../data';

function Clients() {
  return (
    <section>
      {clients.map(client => (
        <div key={client.id} className="client-summary">
          <h3>{client.name}</h3>
          <Link className="btn btn-light" to={`/clients/${client.id}`}>Details</Link>
        </div>
      ))}

    </section>
  )
}

export default Clients