import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvents }) {
	const [formData, setFormData] = useState({
		title: '',
		date: '',
		location: ''
	});

	const handleChange = (e) => {
		setFormData((prevFormData) => {
			return { ...prevFormData, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const event = {
			title: formData.title,
			date: formData.date,
			location: formData.location,
			id: Math.random()
		};
		addEvents(event);
	};

	return (
		<form className="new-event-form" onSubmit={handleSubmit}>
			{/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
			<label>
				<span>Event Title:</span>
				<input
					type="text"
					onChange={handleChange}
					name="title"
					value={FormData.title}
				/>
			</label>
			<label>
				<span>Event Date:</span>
				<input
					type="date"
					onChange={handleChange}
					name="date"
					value={FormData.date}
				/>
			</label>
			<label>
				<span>Event Location:</span>
				<select
					onChange={handleChange}
					name="location"
					value={FormData.location}
				>
					<option value="">--- Choose ---</option>
					<option value="cairo">Cairo</option>
					<option value="alex">Alex</option>
					<option value="sharm">Sharm</option>
				</select>
			</label>
			<button>Submit</button>
		</form>
	);
}
