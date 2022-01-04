import { Fragment } from 'react';
function EventList({ events, handleDelete }) {
	return events.map((event) => (
		<Fragment key={event.id}>
			<h2>{event.title}</h2>
			<button onClick={() => handleDelete(event.id)}>Delete</button>
		</Fragment>
	));
}

export default EventList;
