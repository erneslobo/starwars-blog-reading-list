import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const CardVehicle = ({ item, index }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card h-100">
				<img src="https://www.dummyimage.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">Model : {item.model}</p>
					<p className="card-text">Manufacturer : {item.manufacturer}</p>
					<p className="card-text">passengers : {item.passengers}</p>
					<div className="d-flex justify-content-between">
						<Link to={"/vehicle/" + index}>
							<button type="button" className="btn btn-outline-primary">
								Learn more!
							</button>
						</Link>
						<button
							type="button"
							className={`btn ${store.favorites.includes(item) ? "btn-warning" : "btn-outline-warning"}`}
							onClick={() => {
								if (store.favorites.includes(item)) {
									actions.removeFromFavorites(item);
								} else {
									actions.addToFavorites(item);
								}
							}}>
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

CardVehicle.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
};
