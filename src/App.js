import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';
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
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
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
				<Modal handleClose={handleClose} isSalesModal={true}>
					<h2>10% Off Coupon Code!!</h2>
					<p>Use the code NINJA10 at the checkout</p>
					<NewEventForm />
				</Modal>
			)}
			<button onClick={() => setShowModal(true)}>Show Modal</button>
		</div>
	);
}

export default App;
