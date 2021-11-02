const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://swapi.dev/api/";
	const BASE_API_URL = "https://3000-indigo-guppy-lr149uik.ws-us17.gitpod.io/";

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

				fetch(`${BASE_API_URL}login`, requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.access_token) {
							localStorage.setItem("jwt-token", result.access_token);
							setStore({ authenticated: true });
						} else if (result.message) {
							alert(result.message);
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

				fetch(`${BASE_API_URL}users`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ userCreated: true }))
					.catch(error => console.log("error", error));
			},

			getFavorites: () => {
				const actions = getActions();
				const store = getStore();
				let myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${localStorage.getItem("jwt-token")}`);

				let requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${BASE_API_URL}users/favorites`, requestOptions)
					.then(response => response.json())
					.then(result => {
						for (let i in result) {
							if ("character_id" in result[i]) {
								setStore({
									favorites: [...store.favorites, store.characters[result[i]["character_id"] - 1]]
								});
							}
							if ("planet_id" in result[i]) {
								setStore({
									favorites: [...store.favorites, store.planets[result[i]["planet_id"] - 1]]
								});
							}
						}
					})
					.catch(error => console.log("error", error));
			},

			addToFavorites: profile => {
				console.log(profile);
				const store = getStore();
				let myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${localStorage.getItem("jwt-token")}`);

				let raw = "";

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				let url = "";

				if (store.planets.includes(profile)) {
					url = `${BASE_API_URL}favorite/planet/${profile["id"]}`;
				}
				if (store.characters.includes(profile)) {
					url = `${BASE_API_URL}favorite/people/${profile["id"]}`;
				}

				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => setStore({ favorites: [...store.favorites, profile] }))
					.catch(error => console.log("error", error));
			},

			removeFromFavorites: profile => {
				const store = getStore();
				let myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${localStorage.getItem("jwt-token")}`);

				let raw = "";

				let requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				let url = "";

				if (store.planets.includes(profile)) {
					url = `${BASE_API_URL}favorite/planet/${profile["id"]}`;
				}
				if (store.characters.includes(profile)) {
					url = `${BASE_API_URL}favorite/people/${profile["id"]}`;
				}

				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						const filterFavorites = store.favorites.filter(item => item != profile);
						setStore({ favorites: filterFavorites });
					})
					.catch(error => console.log("error", error));
			},

			getCharacters: async () => {
				const store = getStore();
				if (localStorage.getItem("characters") == null) {
					const url = `${BASE_API_URL}people/`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ characters: data });
					localStorage.setItem("characters", JSON.stringify(data));
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				} else {
					setStore({ characters: JSON.parse(localStorage.getItem("characters")) });
					setStore({ searchItems: [...store.planets, ...store.characters, ...store.vehicles] });
				}
			},

			getPlanets: async () => {
				const store = getStore();
				if (localStorage.getItem("planets") == null) {
					const url = `${BASE_API_URL}planets/`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data });
					localStorage.setItem("planets", JSON.stringify(data));
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
