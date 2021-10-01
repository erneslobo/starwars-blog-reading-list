import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const CardPeople = ({ item, index }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card h-100">
				<img src="https://www.dummyimage.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body bg-dark text-white">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">Gender : {item.gender}</p>
					<p className="card-text">Hair Color : {item.hair_color}</p>
					<p className="card-text">Eye-Color : {item.eye_color}</p>
					<div className="d-flex justify-content-between">
						<Link to={"/people/" + index}>
							<button type="button" className="btn btn-outline-danger">
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

CardPeople.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
};
