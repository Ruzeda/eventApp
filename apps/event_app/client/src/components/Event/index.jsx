import React, { useState } from 'react'

const Event = ({event, handleDelete}) => {
    //  we will have many of this compnent!

    // EACH ONE will have a showform state
    const [show, setShow] = useState(false);

  return (
    <div key={event._id} className="event-item">
    <button onClick={() => handleDelete(event._id)}>Delete</button>
    <button onClick={() => setShow(!show)}>Edit</button>
    <h2>{event.title}</h2>
    <p>Date: {event.date}</p>
    <p>Location: {event.location}</p>
    <p>Description: {event.description}</p>
    <div className="organizer">
      <strong>Organizer:</strong>
      <p>Name: {event.organizer.name}</p>
      <p>Role: {event.organizer.role}</p>
    </div>
    {/* show form? */}
    {/* show ? <form></form> : <></> */}
  </div>
  )
}

export default Event