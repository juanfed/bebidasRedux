import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/formulario.css';


const Formulario = () => {
	const [categorias, guardarCategorias] = useState([]);

	useEffect(() =>{
		const obtenerCategorias = async () =>{
			const url = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
			guardarCategorias(url.data.drinks);
		}
		obtenerCategorias();
	},[])

	return (
		<form className='formulario'>
			<div>
				<input type="text"
					name="nombre"
					placeholder='Buscar por Ingrediente' />
			</div>

			<div>
				<select name="categoria" id="">
					<option value="">- Selecciona Categoria -</option>
				</select>
			</div>

			<div>
				<input type="submit" 
				value="Buscar Bevidas"/>
			</div>
		</form>
	)
}

export default Formulario