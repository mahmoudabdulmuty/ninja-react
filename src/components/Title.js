export default function Title({ title, subtitle }) {
	return (
		<>
			<h1 className="title">{title}</h1>
			<p className="sub-title">{subtitle}</p>
		</>
	);
}
