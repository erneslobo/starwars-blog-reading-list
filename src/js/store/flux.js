const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://swapi.dev/api/";

	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			vehicles: [],
			searchItems: [],
			authenticated: false,
			userCreated: false
		},
		actions: {
			login: (email, password) => {
				let myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				let raw = JSON.stringify({
					email: email,
					password: password
				});

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-indigo-guppy-lr149uik.ws-us17.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.access_token) {
							setStore({ authenticated: true });
							localStorage.setItem("jwt-token", result.access_token);
						}
					})
					.catch(error => console.log("error", error));
			},

			logout: () => {
				localStorage.removeItem("jwt-token");
				setStore({ favorites: [], authenticated: false });
			},
			signup: (name, email, password) => {
				let myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				let raw = JSON.stringify({
					name: name,
					email: email,
					password: password
				});

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-indigo-guppy-lr149uik.ws-us17.gitpod.io/users", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ userCreated: true }))
					.catch(error => console.log("error", error));
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
				const store = getStore();
				if (localStorage.getItem("characters") == null) {
					const url = `${BASE_URL}people/`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ characters: data.results });
					localStorage.setItem("characters", JSON.stringify(data.results));
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				} else {
					setStore({ characters: JSON.parse(localStorage.getItem("characters")) });
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				}
			},

			getPlanets: async () => {
				const store = getStore();
				if (localStorage.getItem("planets") == null) {
					const url = `${BASE_URL}planets/`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data.results });
					localStorage.setItem("planets", JSON.stringify(data.results));
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				} else {
					setStore({ planets: JSON.parse(localStorage.getItem("planets")) });
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				}
			},

			getVehicles: async () => {
				const store = getStore();
				if (localStorage.getItem("vehicles") == null) {
					const url = `${BASE_URL}vehicles/`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ vehicles: data.results });
					localStorage.setItem("vehicles", JSON.stringify(data.results));
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				} else {
					setStore({ vehicles: JSON.parse(localStorage.getItem("vehicles")) });
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				}
			}
		}
	};
};

export default getState;
