document.getElementById("sidebar_toggle").addEventListener("click", () => {
	document.getElementById("sidebar_container").classList.toggle("show");
	document.getElementById("pages_container").classList.toggle("hidden_if_portrait");
});
