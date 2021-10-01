import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const SearchBar = () => {
	const { store, actions } = useContext(Context);
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = event => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = store.searchItems.filter(value => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
	};

	return (
		<div className="search mx-5">
			<div className="searchInputs">
				<input type="text" placeholder="Enter a name" value={wordEntered} onChange={handleFilter} />
			</div>
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<Link
								key={key}
								className="dataItem"
								onClick={clearInput}
								to={`${
									store.characters.includes(value)
										? "/people/" + store.characters.indexOf(value)
										: store.planets.includes(value)
											? "/planet/" + store.planets.indexOf(value)
											: "/vehicle/" + store.vehicles.indexOf(value)
								}`}>
								<p>{value.name} </p>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
