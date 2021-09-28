import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5">
					<img src="https://cdn.iconscout.com/icon/free/png-128/star-341-225972.png" alt="..." />
				</span>
			</Link>
			<div className="ml-auto mx-5">
				<div className="btn-group ">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						{`Favorites `}
						<span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((item, index) => {
							return (
								<li key={index}>
									<div className="d-flex justify-content-around text-center">
										<Link to={"/single/" + index}>
											<span>{item.name}</span>
										</Link>
										<i className="fas fa-trash" />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<Link to="/demo" />
			</div>
		</nav>
	);
};
