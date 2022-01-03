import { useState } from 'react';
import './App.css';
import Title from './components/Title';

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
	const [isShown, setIsShown] = useState(true);

	const handleDelete = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((prevEvent) => {
				return prevEvent.id !== id;
			});
		});
	};

	const eventsElements = events.map((event) => (
		<div key={event.id}>
			<h2>{event.title}</h2>
			<button onClick={() => handleDelete(event.id)}>Delete</button>
		</div>
	));
	return (
		<div className="App">
			<Title />
			<button onClick={() => setIsShown((prevShown) => !prevShown)}>
				{isShown ? 'Hide' : 'Show'}
			</button>
			{isShown && <div>{eventsElements}</div>}
		</div>
	);
}

export default App;
