import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const Formulario = () => {

	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	return (
		<>
		<Formik
			initialValues={{
				nombre: '',
				correo: '',
			}}
			validate={(valores) => { 
				let errores = {};
				//validacion nombre
				if (!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'El nombre solo puede contener letras y espacios'
				}
				//validacion correo
				if (!valores.correo){
					errores.correo = 'Por favor ingresa un correo electronico'
				} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
					errores.correo = 'El correo solo puede contener letras, número, puntos, guiones'
				}
				return errores;
			 }}
			onSubmit={(valores, {resetForm}) => {
				resetForm();
				console.log(valores);
				console.log('formulario enviado');
				cambiarFormularioEnviado(true);
				setTimeout(() => cambiarFormularioEnviado(false), 3000);
			}}
		>
			{({errors}) => (
				<Form className="formulario">
					<div>
						<label htmlFor="nombre">Nombre</label>
						<Field 
							type="text" 
							id="nombre" 
							name="nombre" 
							placeholder="erick fabian"
						/>
						<ErrorMessage name="nombre" component={() =>(
							<div className='error'>{errors.nombre}</div>
						)}/>
					</div>
					<div>
						<label htmlFor="correo">Correo</label>
						<Field 
							type="text" 
							id="correo" 
							name="correo" 
							placeholder="correo@correo.com" 
						/>
						<ErrorMessage name="correo" component={() =>(
							<div className='error'>{errors.correo}</div>
						)}/>
					</div>
					<div>
						<Field
							name="pais"
							as="select"
						>
							<option value="perú">Perú</option>
							<option value="argentina">Argentina</option>
							<option value="españa">España</option>
						</Field>
					</div>
					<div>
						<label>
							<Field type="radio" name="sexo" value="hombre"/> Hombre
						</label>
						<label>
							<Field type="radio" name="sexo" value="mujer"/> Mujer
						</label>
					</div>
					<div>
						<Field name="mensaje" as="textarea" placeholder="Mensaje"/>
					</div>
					<button type="submit">Enviar</button>
					{formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>}
				</Form>
			)}
			{/* {({values,errors,touched,handleSubmit,handleChange,handleBlur}) => (
				<form className="formulario" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="nombre">Nombre</label>
						<input 
							type="text" 
							id="nombre" 
							name="nombre" 
							placeholder="erick fabian" 
							value={values.nombre}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
					</div>
					<div>
						<label htmlFor="correo">Correo</label>
						<input 
							type="text" 
							id="correo" 
							name="correo" 
							placeholder="correo@correo.com" 
							value={values.correo}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
					</div>
					<button type="submit">Enviar</button>
					{formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>}
				</form>
			)} */}
		</Formik>
		</>
	);
}
 
export default Formulario;