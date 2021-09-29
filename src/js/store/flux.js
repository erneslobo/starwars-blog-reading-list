const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://swapi.dev/api/";

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			addToFavorites: profile => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, profile] });
			},

			removeFromFavorites: profile => {
				const store = getStore();
				const filterFavorites = store.favorites.filter(item => item != profile);
				setStore({ favorites: filterFavorites });
			},

			getCharacters: async () => {
				const url = `${BASE_URL}people/`;
				const response = await fetch(url);
				const data = await response.json();
				setStore({ characters: data.results });
			},
			getPlanets: async () => {
				const url = `${BASE_URL}planets/`;
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},
			getVehicles: async () => {
				const url = `${BASE_URL}vehicles/`;
				const response = await fetch(url);
				const data = await response.json();
				setStore({ vehicles: data.results });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
