import './Modal.css';
export default function Modal({ children, handleModal }) {
	return (
		<div className="modal-backdrop">
			<div className="modal">
				{children}
				<button onClick={handleModal}>Close Modal</button>
			</div>
		</div>
	);
}
