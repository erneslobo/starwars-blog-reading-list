import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3 g-4">
				{store.characters.map((item, index) => {
					return <CardPeople key={item.url} item={item} index={index} />;
				})}
			</div>
			<br />
			<h1 className="text-danger">Planets</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3 g-4">
				{store.planets.map((item, index) => {
					return <CardPlanet key={item.url} item={item} index={index} />;
				})}
			</div>
		</div>
	);
};
