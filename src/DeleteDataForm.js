import React, {useState} from 'react';
import './DeleteDataForm.css'; // Importa los estilos CSS

function DeleteDataForm() {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [razon, setRazon] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes realizar alguna acción, como enviar los datos a un servidor para su procesamiento
		console.log('Nombre:', nombre);
		console.log('Correo electrónico:', email);
		console.log('Razón:', razon);
		// Limpia el formulario después de enviar
		setNombre('');
		setEmail('');
		setRazon('');
	};

	return (
		<div className="container">
			{' '}
			{/* Aplica la clase 'container' para agregar estilos */}
			<h2>Solicitud de eliminación de datos</h2>
			<p>
				Por favor, complete el siguiente formulario para solicitar la
				eliminación de sus datos:
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre completo:</label>
				<input
					type="text"
					id="nombre"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
					required
				/>
				<label htmlFor="email">Correo electrónico:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="razon">Motivo de la eliminación:</label>
				<textarea
					id="razon"
					value={razon}
					onChange={(e) => setRazon(e.target.value)}
					rows="4"
					required
				></textarea>
				<button type="submit">Enviar solicitud</button>
			</form>
			<a href="bariaenvios://" className="botonapp">
				baria Envios
			</a>
		</div>
	);
}

export default DeleteDataForm;
