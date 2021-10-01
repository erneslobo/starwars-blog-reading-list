import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container text-white">
			<div className="row">
				<div className="col-6">
					<img className="img-thumbnail" src="https://www.dummyimage.com/400x400" alt="..." />
				</div>
				<div className="col-6">
					<h1 className="text-warning">{store.vehicles[params.index].name}</h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, aut ex rem autem obcaecati at
					quos accusamus amet asperiores voluptatibus maxime ut optio, quaerat possimus! Fuga, sit minus! Ab,
					soluta?
				</div>
			</div>
			<br />
			<hr />
			<div className="row">
				<table className="table table-borderless text-white">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Model</th>
							<th scope="col">Manufacturer</th>
							<th scope="col">Cost in credits</th>
							<th scope="col">Passengers</th>
							<th scope="col">Crew</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{store.vehicles[params.index].name}</td>
							<td>{store.vehicles[params.index].model}</td>
							<td>{store.vehicles[params.index].manufacturer}</td>
							<td>{store.vehicles[params.index].cost_in_credits}</td>
							<td>{store.vehicles[params.index].passengers}</td>
							<td>{store.vehicles[params.index].crew}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
