import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const CardPlanet = ({ item, index }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card h-100">
				<img src="https://www.dummyimage.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body bg-dark text-white">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">Population : {item.population}</p>
					<p className="card-text">Terrain : {item.terrain}</p>
					<div className="d-flex justify-content-between">
						<Link to={"/planet/" + index}>
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

CardPlanet.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number
};
