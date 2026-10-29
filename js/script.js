const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
	menuButton.addEventListener("click", () => {
		const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
		menuButton.setAttribute("aria-expanded", String(!isExpanded));
		menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
		siteNav.classList.toggle("is-open", !isExpanded);
	});

	siteNav.addEventListener("click", (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			menuButton.setAttribute("aria-expanded", "false");
			menuButton.setAttribute("aria-label", "Open navigation");
			siteNav.classList.remove("is-open");
		}
	});
}
