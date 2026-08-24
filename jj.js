// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// ORDER BUTTONS
// ==============================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const item = button.getAttribute("data-item");

        alert(
            `Great choice! ☕\n\nYou selected: ${item}\n\nThank you for ordering from Jesse's Coffee Shop!`
        );
    });
});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received. ☕`;

    contactForm.reset();
});
