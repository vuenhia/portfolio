document.addEventListener("DOMContentLoaded", function () {
	const nightModeToggle = document.getElementById("nightModeToggle");

	// Check if night mode was enabled previously and apply it on page load
	if (localStorage.getItem("nightMode") === "enabled") {
		document.body.classList.add("darkTheme");
	}

	// Toggle night mode on button click
	nightModeToggle.addEventListener("click", function () {
		document.body.classList.toggle("darkTheme");

		// Update localStorage based on the new state
		if (document.body.classList.contains("darkTheme")) {
			localStorage.setItem("nightMode", "enabled");
		} else {
			localStorage.setItem("nightMode", "disabled");
		}
	});

	elementsToAnimate.forEach((element, index) => {
		setTimeout(() => {
			element.classList.add("fade-in");
		}, index * 200); // Delay each element for a staggered effect
	});
});
