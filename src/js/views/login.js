import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = () => {
		actions.login(email, password);
	};

	return (
		<div className="login container flex text-white fw-bold m-auto text-center">
			{store.authenticated ? (
				<Redirect to="/" />
			) : (
				<>
					<div className="row mb-2">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							placeholder="enter email"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="row mb-2">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="enter password"
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="row mb-2">
						<button className="btn-danger" onClick={onLogin}>
							Login
						</button>
					</div>
					<Link to="/signup">Click here to sign up</Link>
				</>
			)}
		</div>
	);
};
