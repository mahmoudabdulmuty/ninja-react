import { Fragment, useState } from 'react';
import './App.css';

function App() {
	const [events, setEvents] = useState([
		{
			title: 'Reading Quran',
			id: 1
		},
		{
			title: 'Praying',
			id: 2
		},
		{
			title: 'Studying React',
			id: 3
		}
	]);

	const handleDelete = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((prevEvent) => {
				return prevEvent.id !== id;
			});
		});
	};

	const eventsElements = events.map((event) => (
		<Fragment key={event.id}>
			<h2>{event.title}</h2>
			<button onClick={() => handleDelete(event.id)}>Delete</button>
		</Fragment>
	));
	return <div className="App">{eventsElements}</div>;
}

export default App;
