import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm() {
	const [formData, setFormData] = useState({
		title: '',
		date: ''
	});

	const handleChange = (e) => {
		setFormData((prevFormData) => {
			return { ...prevFormData, [e.target.name]: e.target.value };
		});
	};

	return (
		<form className="new-event-form">
			{/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
			<label>
				<span>Event Title:</span>
				<input type="text" onChange={handleChange} name="title" />
			</label>
			<label>
				<span>Event Date:</span>
				<input type="date" onChange={handleChange} name="date" />
			</label>
			<p>
				{formData.title} {formData.date}
			</p>
			<button>Submit</button>
		</form>
	);
}
