import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import consultarDatosAction from '../redux/action/consultarDatosAction';
import '../styles/formulario.css';


const Formulario = () => {
	const [busqueda, guardarBusqueda] = useState({
		nombre: '',
		categoria: ''
	})
	const [recetas, guardarRecetas] = useState([]);
	const [buscar, buscarRecetas] = useState({
		nombre: '',
		categoria: ''
	})
	const dispatch = useDispatch();
	useEffect(() => {
		const obtenerDato = () => {
			dispatch(consultarDatosAction())
		}
		obtenerDato();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const obtenerDatosReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value
		})
	}

	const { categorias } = useSelector((state) => (state.categorias))
	console.log(categorias);

	const [consultar, guardarConsultar] = useState(false);

	const { nombre, categoria } = busqueda;


	useEffect(() => {
		const obtenerRecetas = async () => {
			if (consultar) {
				const url = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`);
				guardarRecetas(url.data.drinks);
			}

		}
		obtenerRecetas();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [consultar])

	return (
		<div>
			<section>
			<form className='formulario'
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
				guardarConsultar(true);
				
			}}>
			<div>
				<input type="text"
					name="nombre"
					placeholder='Buscar por Ingrediente'
					onChange={obtenerDatosReceta} />
			</div>

			<div>
				<select name="categoria" id=""
					onChange={obtenerDatosReceta}>
					<option value="">- Selecciona Categoria -</option>
					{categorias.map(categoria => (
						<option key={categoria.strCategory}
							value={categoria.strCategory}>{categoria.strCategory}</option>
					))}
				</select>
			</div>

			<div>
				<input type="submit"
					value="Buscar Bevidas"/>
			</div>
		</form>
			</section>

			<section className='recetas'>
					{recetas.map(receta =>(
						<div className='card' 
						key={receta.idDrink}>
							<h4>{receta.strDrink}</h4>
							<img src={receta.strDrinkThumb} alt={receta.strDrink} />
							<button>Ver Receta</button>
							</div>
					))}
			</section>
		</div>
		
	)
}

export default Formulario