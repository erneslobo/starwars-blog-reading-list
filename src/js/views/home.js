import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardPeople";
import { CardPlanet } from "../component/cardPlanet";
import { CardVehicle } from "../component/cardVehicle";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-white">Characters</h1>
			<div className="row flex-row flex-nowrap overflow-auto row-cols-1 row-cols-md-3 g-4">
				{store.characters.map((item, index) => {
					return <CardPeople key={index} item={item} index={index} />;
				})}
			</div>
			<br />
			<h1 className="text-white">Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto row-cols-1 row-cols-md-3 g-4">
				{store.planets.map((item, index) => {
					return <CardPlanet key={index} item={item} index={index} />;
				})}
			</div>
			<br />
			<h1 className="text-white">Vehicles</h1>
			<div className="row flex-row flex-nowrap overflow-auto row-cols-1 row-cols-md-3 g-4">
				{store.vehicles.map((item, index) => {
					return <CardVehicle key={item.url} item={item} index={index} />;
				})}
			</div>
		</div>
	);
};
