// #region | Variables
const games = new Map([
	["gta_v", {
		label: "Grand Theft Auto V",
		info: {
			text: "Testing was done in version 1.0.3258.0, using DirectX 11 in Fullscreen.",
			setup: 0
		},
		settings: {
			fxaa_msaa_txaa: {
				label: "FXAA, MSAA, TXAA",
				default_option: "fxaa_on_msaa_x4_txaa_on",
				note: "The 'aa' stands for Anti Aliasing, and it smoothes the image a bit. I'd recommend at least using FXAA. If you can, use FXAA in combination with MSAA X2, but any more than that just uses too many resources to make sense.",
				options: {
					"fxaa_off_msaa_off_txaa_off": "Off, Off, Off",
					"fxaa_off_msaa_x2_txaa_off": "Off, X2, Off",
					"fxaa_off_msaa_x4_txaa_off": "Off, X4, Off",
					"fxaa_off_msaa_x8_txaa_off": "Off, X8, Off",
					"fxaa_off_msaa_x2_txaa_on": "Off, X2, On",
					"fxaa_off_msaa_x4_txaa_on": "Off, X4, On",

					"fxaa_on_msaa_off_txaa_off": "On, Off, Off",
					"fxaa_on_msaa_x2_txaa_off": "On, X2, Off",
					"fxaa_on_msaa_x4_txaa_off": "On, X4, Off",
					"fxaa_on_msaa_x8_txaa_off": "On, X8, Off",
					"fxaa_on_msaa_x2_txaa_on": "On, X2, On",
					"fxaa_on_msaa_x4_txaa_on": "On, X4, On"
				},
				comparisons: [
					{
						fps: [
							99,
							86,
							79,
							65,
							83,
							77,
							97,
							84,
							78,
							65,
							84,
							77
						]
					},
					{
						note: "The same images, but it's zoomed in so you can see better.",
						fps: [
							99,
							86,
							79,
							65,
							83,
							77,
							97,
							84,
							78,
							65,
							84,
							77
						]
					}
				]
			},
			/*population_density: {
				label: "Population Density",
				default_option: "100",
				options: {
					"0": "0%",
					"10": "10%",
					"20": "20%",
					"30": "30%",
					"40": "40%",
					"50": "50%",
					"60": "60%",
					"70": "70%",
					"80": "80%",
					"90": "90%",
					"100": "100%"
				},
				comparisons: []
			},*/
			/*population_variety: {
				label: "Population Variety",
				default_option: "100",
				options: {
					"0": "0%",
					"10": "10%",
					"20": "20%",
					"30": "30%",
					"40": "40%",
					"50": "50%",
					"60": "60%",
					"70": "70%",
					"80": "80%",
					"90": "90%",
					"100": "100%"
				},
				comparisons: []
			},*/
			/*distance_scaling: {
				label: "Distance Scaling",
				default_option: "100",
				options: {
					"0": "0%",
					"10": "10%",
					"20": "20%",
					"30": "30%",
					"40": "40%",
					"50": "50%",
					"60": "60%",
					"70": "70%",
					"80": "80%",
					"90": "90%",
					"100": "100%"
				},
				comparisons: []
			},*/
			/*texture_quality: {
				label: "Texture Quality",
				default_option: "very_high",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: []
			},*/
			/*shader_quality: {
				label: "Shader Quality",
				default_option: "very_high",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: []
			},*/
			shadow_quality: {
				label: "Shadow Quality",
				default_option: "very_high",
				note: "Extended shadow distance gets set to 0% if the shadow quality is not set to very high, so I left it at 0% for all tests.",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: [
					{
						fps: [
							127,
							120,
							115
						]
					},
					{
						note: "For this test, it's the same location, but with soft shadows set to sharp and high resolution shadows turned off.",
						fps: [
							142,
							140,
							137
						]
					}
				]
			},
			/*reflection_quality: {
				label: "Reflection Quality",
				default_option: "ultra",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High",
					"ultra": "Ultra"
				},
				comparisons: []
			},*/
			/*reflection_msaa: {
				label: "Reflection MSAA",
				default_option: "x8",
				options: {
					"off": "Off",
					"x2": "X2",
					"x4": "X4",
					"x8": "X8"
				},
				comparisons: []
			},*/
			/*water_quality: {
				label: "Water Quality",
				default_option: "very_high",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: []
			},*/
			/*particles_quality: {
				label: "Particles Quality",
				default_option: "very_high",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: []
			},*/
			/*grass_quality: {
				label: "Grass Quality",
				default_option: "ultra",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High",
					"ultra": "Ultra"
				},
				comparisons: []
			},*/
			/*soft_shadows: {
				label: "Soft Shadows",
				default_option: "nvidia_pcss",
				options: {
					"sharp": "Sharp",
					"soft": "Soft",
					"softer": "Softer",
					"softest": "Softest",
					"amd_chs": "AMD CHS",
					"nvidia_pcss": "NVIDIA PCSS"
				},
				comparisons: []
			},*/
			/*post_fx: {
				label: "Post FX",
				default_option: "ultra",
				options: {
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High",
					"ultra": "Ultra"
				},
				comparisons: []
			},*/
			/*motion_blur_strength: {
				label: "Motion Blur Strength",
				default_option: "100",
				options: {
					"0": "0%",
					"100": "100%"
				},
				comparisons: []
			},*/
			/*in_game_depth_of_field_effects: {
				label: "In-Game Depth Of Field Effects",
				default_option: "on",
				options: {
					"off": "Off",
					"on": "On"
				},
				comparisons: []
			},*/
			anisotropic_filtering: {
				label: "Anisotropic Filtering",
				default_option: "x16",
				options: {
					"off": "Off",
					"x2": "X2",
					"x4": "X4",
					"x8": "X8",
					"x16": "X16"
				},
				comparisons: [
					{
						note: "Look at the road markings in the distance. The performance decrease is likely just margin of error, so overall I'd recommend leaving this setting at X16.",
						fps: [
							91,
							91,
							89,
							89,
							89
						]
					}
				]
			},
			/*ambient_occlusion: {
				label: "Ambient Occlusion",
				default_option: "high",
				options: {
					"off": "Off",
					"normal": "Normal",
					"high": "High"
				},
				comparisons: []
			},*/
			/*tessellation: {
				label: "Tessellation",
				default_option: "very_high",
				options: {
					"off": "Off",
					"normal": "Normal",
					"high": "High",
					"very_high": "Very High"
				},
				comparisons: []
			},*/
			/*long_shadows: {
				label: "Long Shadows",
				default_option: "on",
				options: {
					"off": "Off",
					"on": "On"
				},
				comparisons: []
			},*/
			/*high_resolution_shadows: {
				label: "High Resolution Shadows",
				default_option: "on",
				options: {
					"off": "Off",
					"on": "On"
				},
				comparisons: []
			},*/
			/*extended_distance_scaling: {
				label: "Extended Distance Scaling",
				default_option: "100",
				options: {
					"0": "0%",
					"10": "10%",
					"20": "20%",
					"30": "30%",
					"40": "40%",
					"50": "50%",
					"60": "60%",
					"70": "70%",
					"80": "80%",
					"90": "90%",
					"100": "100%"
				},
				comparisons: []
			},*/
			/*extended_shadows_distance: {
				label: "Extended Shadows Distance",
				default_option: "100",
				options: {
					"0": "0%",
					"10": "10%",
					"20": "20%",
					"30": "30%",
					"40": "40%",
					"50": "50%",
					"60": "60%",
					"70": "70%",
					"80": "80%",
					"90": "90%",
					"100": "100%"
				},
				comparisons: []
			}*/
		}
	}]
]);

const setups = [
	{ // My default setup
		"CPU": "AMD Ryzen 7 5800X",
		"RAM": "2x16 GB DDR4-3200 MHz G.Skill Aegis CL16",
		"GPU": "GTX 1080 (Core limited to 1733 MHz)",
		"Resolution": "1920x1080"
	}
];

const game_buttons = new Map();

let current_game, current_setting; // Will be set after content generated
// #endregion


// #region | Elements
const sidebar_toggle = document.getElementById("sidebar_toggle");
const sidebar_container = document.getElementById("sidebar_container");
const search_input = document.getElementById("search_input");
const games_list_container = document.getElementById("games_list");
const settings_list_container = document.getElementById("settings_list");

const pages_container = document.getElementById("pages_container");
const general_page = document.getElementById("general_page");
const game_page = document.getElementById("game_page");
const setting_page = document.getElementById("setting_page");
// #endregion


// #region | Functions
// Initialize page
function init() {

	// Generate the list of games
	generateGamesList();

	// Look for search queries
	const params = new URLSearchParams(location.search);
	const target_game = params.get("game");
	const target_setting = params.get("setting");

	// Valid target game specified
	if (games.has(target_game)) {

		// Valid target setting specified
		if (games.get(target_game).settings[target_setting]) setGameActive(target_game, target_setting);

		// Only a game specified
		else setGameActive(target_game);
	}
}

// Generate the list of game buttons
function generateGamesList() {

	// Generating HTML code for all game buttons
	let code = "";
	games.forEach(({label}, id) => {
		code = `${code}<div data-game="${id}" class="button">${label}</div>`;
	});
	games_list_container.innerHTML = code;

	// Update game buttons list
	document.querySelectorAll("[data-game]").forEach(e => game_buttons.set(e.textContent, e));
}

// Toggle the sidebar when in portrait mode
function toggleSidebar() {
	sidebar_container.classList.toggle("show");
	pages_container.classList.toggle("hidden_if_portrait");
}

// Game button was clicked
function handleGameButtonClick(event) {
	const target_game = event.target.dataset.game;
	if (target_game) {
		setGameActive(target_game);
		const url = new URL(location);
		url.searchParams.set("game", target_game);
		url.searchParams.delete("setting");
		history.pushState({}, "", url);
	}
}

// Setting button was clicked
function handleSettingButtonClick(event) {
	const target_setting = event.target.closest("[data-setting]")?.dataset.setting;
	if (target_setting) {
		setSettingActive(target_setting);
		const url = new URL(location);
		url.searchParams.set("setting", target_setting);
		history.pushState({}, "", url);
	}
}

// Active class for game button, generate settings, optionally generate content
function setGameActive(target_game, target_setting) {

	// Switch active button class
	document.querySelector(`[data-game="${current_game}"]`)?.classList.remove("active");
	document.querySelector(`[data-game="${target_game}"]`).classList.add("active");

	// Variables
	const game = games.get(target_game);
	const settings = game.settings;
	let settings_code = "";

	// Generate list of settings
	for (const [setting_id, data] of Object.entries(settings)) {
		settings_code += `
			<div class="button" data-setting="${setting_id}">
				<div>${data.label}</div>
				<div class="subtext">Comparisons: ${data.comparisons.length}</div>
			</div>
		`;
	}
	settings_list_container.innerHTML = settings_code;

	// Target setting not specified, generate and show game page
	if (!target_setting) {

		// Variables
		const setup = setups[game.info.setup];
		let setup_code = "";
		let default_settings_code = "";

		// Generate setup code
		for (const [k, v] of Object.entries(setup)) setup_code += `<tr><td>${k}</td><td>${v}</td></tr>`;

		// Generate default settings code
		for (const {label, default_option, options} of Object.values(settings)) {
			default_settings_code += `<tr><td>${label}</td><td>${options[default_option]}</td></tr>`;
		}

		// Merge generated code and set HTML
		game_page.innerHTML = `
			<h1>${game.label}</h1><hr />
			<p>${game.info.text}</p><br />
			<h3>PC used for tests:</h3>
			<table class="data_table">${setup_code}</table><br />

			<h3>Game setup:</h3>
			<table class="data_table">${default_settings_code}</table>
		`;

		// Show game page
		document.querySelector(".content_page:not(.hidden)").classList.add("hidden");
		game_page.classList.remove("hidden");
	}

	// Set current game, unset setting
	current_game = target_game;
	current_setting = undefined;

	// Generate and switch to settings page if a setting was specified
	if (target_setting) setSettingActive(target_setting);
}

// Activate class for setting, generate comparisons
function setSettingActive(target_setting) {

	// Abort if same setting
	if (current_setting === target_setting) return;

	// Switch active button class
	document.querySelector(`[data-setting="${current_setting}"]`)?.classList.remove("active");
	document.querySelector(`[data-setting="${target_setting}"]`)?.classList.add("active");

	// Variables
	const game = games.get(current_game);
	const setting = game.settings[target_setting];
	const options = setting.options;
	const comparisons = setting.comparisons;
	let comparisons_code = "";

	const option_keys = Object.keys(options);
	const highest_option = option_keys[option_keys.length - 1];
	const lowest_option = option_keys[0];

	// Iterate comparisons
	comparisons.forEach((comparison, comp_num) => {

		// Current comparison highest and lowest fps
		const max_fps = Math.max(...comparison.fps || [0]);
		const min_fps = Math.min(...comparison.fps || [0]);
		const range = max_fps - min_fps;
		const buffer_proportion = 0.3;
		const buffer = range * buffer_proportion;

		// Generate radio inputs and FPS bars code
		let comparison_data_code = "";
		for (const [option_id, option_label] of Object.entries(options)) {
			const fps = comparison.fps?.[option_keys.indexOf(option_id)];
			comparison_data_code += `
				<tr>
					<td>
						<input type="radio" name="c${comp_num}_l" data-option="${option_id}" ${option_id == highest_option ? "checked" : ""} />
					</td>
					<td>
						<input type="radio" name="c${comp_num}_r" data-option="${option_id}" ${option_id == lowest_option ? "checked" : ""} />
					</td>
					<td>${option_label}</td>
					<td>${fps ? `<div class="fps_bar" style="width: ${(fps - min_fps + buffer) / (range + buffer) * 100}%;"><p>${fps} fps</p></div>` : ""}</td>
				</tr>
			`;
		}

		// Merge into comparisons code
		comparisons_code += `
			<div class="comparison_container" style="--cut: 50%;">
				<h2>Comparison ${comp_num + 1}</h2>

				${comparison.note ? `<p class="comparison_note">${comparison.note}</p>` : ""}

				<div class="images_container">
					<img id="c${comp_num}_l" class="img_left" src="./media/${current_game}/${target_setting}/${comp_num}/${highest_option}.jpg" width="1920" height="1080" />
					<img id="c${comp_num}_r" class="img_right" src="./media/${current_game}/${target_setting}/${comp_num}/${lowest_option}.jpg" width="1920" height="1080" />
				</div>

				<input data-target="c${comp_num}_l" class="slider" type="range" min="0" max="10000" value="5000" />

				<div class="comparison_data">
					<table>
						${comparison_data_code}
					</table>
				</div>
			</div>
		`;
	});

	// Set HTML code
	setting_page.innerHTML = `
		<h1>${game.label}</h1>
		<h2>${setting.label}</h2><hr />
		${setting.note ? `<p class="comparison_note">${setting.note}</p>` : ""}

		${comparisons_code}
	`;

	// Show setting page
	document.querySelector(".content_page:not(.hidden)").classList.add("hidden");
	setting_page.classList.remove("hidden");

	// Set current setting
	current_setting = target_setting;
}

// Handling any input in setting page
function settingInputHandler(event) {

	// Element has name, so it's a radio
	if (event.target.name) {
		const target_image = document.getElementById(event.target.name);
		const current_src = target_image.getAttribute("src");
		target_image.setAttribute("src", current_src.replace(/([^\/]+)$/, `${event.target.dataset.option}.jpg`));
	}

	// No name, meaning it's a range
	else {
		const target_image = document.getElementById(event.target.dataset.target);
		target_image.style.setProperty("--cut", `${Number(event.target.value) / 100}%`);
	}
}

// Search and filter the list of games
function searchGame() {
	const search_string = search_input.value.replaceAll(/[^A-Za-z0-9-_:]/g, "");

	if (!search_string) {
		game_buttons.forEach(e => e.classList.remove("hidden"));
	} else {
		const regex = new RegExp(search_string.split("").join(".*"), "i");
		game_buttons.forEach((e, label) => {
			if (regex.test(label)) e.classList.remove("hidden");
			else e.classList.add("hidden");
		});
	}
}
// #endregion


// #region | Event listeners
sidebar_toggle.addEventListener("click", toggleSidebar);
games_list_container.addEventListener("click", handleGameButtonClick);
settings_list_container.addEventListener("click", handleSettingButtonClick);
setting_page.addEventListener("input", settingInputHandler);
search_input.addEventListener("input", searchGame);
// #endregion

init();
