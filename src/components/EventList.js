import styles from './EventList.module.css';
export default function EventList({ events, handleDelete }) {
	return events.map((event) => (
		<div className={styles.card} key={event.id}>
			<h2>{event.title}</h2>
			<button onClick={() => handleDelete(event.id)}>Delete</button>
		</div>
	));
}
