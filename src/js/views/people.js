import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";

export const People = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container text-white">
			<div className="row">
				<div className="col-6">
					<img className="img-thumbnail" src="https://www.dummyimage.com/400x400" alt="..." />
				</div>
				<div className="col-6">
					<h1 className="text-warning">{store.characters[params.index].name}</h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, aut ex rem autem obcaecati at
					quos accusamus amet asperiores voluptatibus maxime ut optio, quaerat possimus! Fuga, sit minus! Ab,
					soluta?
				</div>
			</div>
			<br />
			<hr className="text-danger" />
			<div className="row">
				<table className="table table-borderless">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Birth Year</th>
							<th scope="col">Gender</th>
							<th scope="col">Height</th>
							<th scope="col">Skin Color</th>
							<th scope="col">Eye Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{store.characters[params.index].name}</td>
							<td>{store.characters[params.index].birth_year}</td>
							<td>{store.characters[params.index].gender}</td>
							<td>{store.characters[params.index].height}</td>
							<td>{store.characters[params.index].skin_color}</td>
							<td>{store.characters[params.index].eye_color}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
