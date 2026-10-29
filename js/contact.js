const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-form-status");

if (contactForm instanceof HTMLFormElement && contactStatus instanceof HTMLElement) {
	contactForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(contactForm);
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const message = String(formData.get("message") || "").trim();
		const body = `Hello Ephraim Creations, I'd like to get in touch.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

		// Encode the complete message so punctuation and line breaks survive in WhatsApp.
		const whatsappUrl = `https://wa.me/254112268873?${new URLSearchParams({ text: body })}`;
		contactStatus.textContent = "WhatsApp should open with your message ready to send.";

		// Open WhatsApp in a new tab and prevent it from controlling the Contact page.
		const whatsappWindow = window.open(whatsappUrl, "_blank");
		if (whatsappWindow) {
			whatsappWindow.opener = null;
		} else {
			window.location.href = whatsappUrl;
		}
	});
}
