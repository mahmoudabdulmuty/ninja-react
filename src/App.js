import { Fragment, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
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
		<Fragment key={event.id}>
			<h2>{event.title}</h2>
			<button onClick={() => handleDelete(event.id)}>Delete</button>
		</Fragment>
	));
	return (
		<div className="App">
			<Title title="My events" subtitle="this is subtitle" />
			<button onClick={() => setIsShown((prevShown) => !prevShown)}>
				{isShown ? 'Hide' : 'Show'}
			</button>
			{isShown && <>{eventsElements}</>}
			<Modal>
				<h2>10% Off Coupon Code!!</h2>
				<p>Use the code NINJA10 at the checkout</p>
			</Modal>
		</div>
	);
}

export default App;
