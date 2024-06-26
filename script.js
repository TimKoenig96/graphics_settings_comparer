// #region | Variables
const games = new Map([
	["gta_v", {
		label: "Grand Theft Auto V"
	}],
	["cities_skylines", {
		label: "Cities: Skylines"
	}],
	["msfs_2020", {
		label: "Microsoft Flight Simulator 2020"
	}]
]);
// #endregion


// #region | Elements
const sidebar_toggle = document.getElementById("sidebar_toggle");
const sidebar_container = document.getElementById("sidebar_container");
const games_list_container = document.getElementById("games_list");

const pages_container = document.getElementById("pages_container");
// #endregion


// #region | Functions
// Initialize page
function init() {

	// Generate the list of games
	generateGamesList();
}

// Generate the list of game buttons
function generateGamesList() {

	// Generating HTML code for all game buttons
	let code = "";
	games.forEach(({label}, id) => {
		code = `${code}<div data-game="${id}" class="button">${label}</div>`;
	});
	games_list_container.innerHTML = code;
}

// Toggle the sidebar when in portrait mode
function toggleSidebar() {
	sidebar_container.classList.toggle("show");
	pages_container.classList.toggle("hidden_if_portrait");
}

// Game button was clicked
function handleGameButtonClick(event) {
	const target_game = event.target.dataset.game;
	if (!target_game) return;

	// TODO: Request loading game
}
// #endregion


// #region | Event listeners
sidebar_toggle.addEventListener("click", toggleSidebar);
games_list_container.addEventListener("click", handleGameButtonClick);
// #endregion

init();
