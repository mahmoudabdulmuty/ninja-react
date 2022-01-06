import { useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvents }) {
	// const [formData, setFormData] = useState({
	// 	title: '',
	// 	date: ''
	// });
	const title = useRef();
	const date = useRef();

	// const handleChange = (e) => {
	// 	setFormData((prevFormData) => {
	// 		return { ...prevFormData, [e.target.name]: e.target.value };
	// 	});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		const event = {
			title: title.current.value,
			date: date.current.value,
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
				<input type="text" ref={title} />
			</label>
			<label>
				<span>Event Date:</span>
				<input type="date" ref={date} />
			</label>
			<button>Submit</button>
		</form>
	);
}
