import React, { useContext } from "react";
import SearchBar from "./searchBar";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top bg-opacity-10">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5">
					<img
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
						alt="..."
					/>
				</span>
			</Link>
			<div className="d-flex ml-auto mx-5 align-items-center">
				<SearchBar />
				{store.authenticated && (
					<>
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-danger dropdown-toggle"
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
												<Link
													to={`${
														store.characters.includes(item)
															? "/people/" + store.characters.indexOf(item)
															: store.planets.includes(item)
																? "/planet/" + store.planets.indexOf(item)
																: "/vehicle/" + store.vehicles.indexOf(item)
													}`}>
													<span>{item.name}</span>
												</Link>
												<span onClick={() => actions.removeFromFavorites(item)}>
													<i className="fas fa-trash" />
												</span>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</>
				)}

				{store.authenticated ? (
					<button type="button" className="btn btn-warning mx-2" onClick={actions.logout}>
						Log out
					</button>
				) : (
					<Link to="/login">
						<button type="button" className="btn btn-warning mx-2">
							Sign in/Sign up
						</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
