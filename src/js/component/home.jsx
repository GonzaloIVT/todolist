import React, { useState, useEffect } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState([]);

	const Lista = tarea.map((tarea, index) => {
		return (
			<li key={index}>
				{tarea}
				<button onClick={() => eliminar(index)}>
					<i className="fas fa-window-close"></i>
				</button>
			</li>
		);
	});

	const tecla = e => {
		if (e.keyCode === 13 && e.target.value !== "") {
			let texto = tarea.concat(e.target.value);
			setTarea(texto);
			e.target.value = "";
		}
	};

	const eliminar = i => {
		let borrar = [...tarea];
		borrar.splice(i, 1);
		setTarea(borrar);
	};

	{
		return (
			<div className="container text-center mt-5">
				<h1>To Do List</h1>
				<ul className="listItemsClass">
					<input type="text" onKeyUp={tecla} placeholder="Tareas?" />
					{Lista}
				</ul>
			</div>
		);
	}
};
export default Home;
