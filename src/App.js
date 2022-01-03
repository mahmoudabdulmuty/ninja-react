import { useState } from 'react';
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

	const eventsElements = events.map((event) => (
		<h2 key={event.id}>{event.title}</h2>
	));
	return <div className="App">{eventsElements}</div>;
}

export default App;
