import { useEffect, useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';
import Title from './components/Title';

function App() {
	const [events, setEvents] = useState(
		JSON.parse(localStorage.getItem('events'))
	);
	const [isShown, setIsShown] = useState(true);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		localStorage.setItem('events', JSON.stringify(events));
	}, [events]);

	const addEvents = (event) => {
		setEvents((prevEvents) => {
			return [...prevEvents, event];
		});
		setShowModal(false);
	};

	const handleDelete = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((prevEvent) => {
				return prevEvent.id !== id;
			});
		});
	};

	return (
		<div className="App">
			<Title title="My events" subtitle="this is subtitle" />
			<button onClick={() => setIsShown((prevShown) => !prevShown)}>
				{isShown ? 'Hide' : 'Show'}
			</button>
			{isShown && <EventList events={events} handleDelete={handleDelete} />}
			{showModal && (
				<Modal isSalesModal={true}>
					<h2>10% Off Coupon Code!!</h2>
					<p>Use the code NINJA10 at the checkout</p>
					<NewEventForm addEvents={addEvents} />
				</Modal>
			)}
			<br />
			<button onClick={() => setShowModal(true)}>Add Event</button>
		</div>
	);
}

export default App;
