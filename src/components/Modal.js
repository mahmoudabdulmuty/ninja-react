import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({ children, handleModal }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div className="modal">
				{children}
				<button onClick={handleModal}>Close Modal</button>
			</div>
		</div>,
		document.body
	);
}
