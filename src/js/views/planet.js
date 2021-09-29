import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img src="https://www.dummyimage.com/400x400" alt="..." />
				</div>
				<div className="col-6">
					<h1>{store.planets[params.index].name}</h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, aut ex rem autem obcaecati at
					quos accusamus amet asperiores voluptatibus maxime ut optio, quaerat possimus! Fuga, sit minus! Ab,
					soluta?
				</div>
			</div>
			<br />
			<hr />
			<div className="row">
				<table className="table table-borderless">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Climate</th>
							<th scope="col">Population</th>
							<th scope="col">Orbital Period</th>
							<th scope="col">Rotation Period</th>
							<th scope="col">Diameter</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{store.planets[params.index].name}</td>
							<td>{store.planets[params.index].climate}</td>
							<td>{store.planets[params.index].population}</td>
							<td>{store.planets[params.index].orbital_period}</td>
							<td>{store.planets[params.index].rotation_period}</td>
							<td>{store.planets[params.index].diameter}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
