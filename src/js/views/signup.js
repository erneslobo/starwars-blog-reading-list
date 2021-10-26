import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [name, setname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onCreateUser = e => {
		e.preventDefault();
		actions.signup(name, email, password);
	};

	return (
		<div className="container signup text-white fw-bold">
			{store.userCreated ? (
				<Redirect to="/" />
			) : (
				<form onSubmit={onCreateUser}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							aria-describedby="nameHelp"
							onChange={e => setname(e.target.value)}
							value={name}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Create User
					</button>
				</form>
			)}
		</div>
	);
};
