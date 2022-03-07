import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import consultarDatosAction from '../redux/action/consultarDatosAction';
import '../styles/formulario.css';


const Formulario = () => {
	const dispatch = useDispatch();
	useEffect(() =>{
		const obtenerDato = () =>{
			dispatch(consultarDatosAction())
		}
		obtenerDato();
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const {categorias} = useSelector((state) =>(state.categorias))
	console.log(categorias);

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
	)
}

export default Formulario