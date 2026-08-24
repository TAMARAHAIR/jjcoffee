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

// =========================
// SHOPPING CART
// =========================

let cart = [];


// Add item to cart
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(`${name} has been added to your order!`);
}


// Update cart
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;
        count += item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                ₦${item.price.toLocaleString()} × ${item.quantity}
            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString();
}


// Remove item
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// Open cart
function openCart() {

    const modal = document.getElementById("cart-modal");

    modal.style.display = "flex";

    updateCart();
}


// Close cart
function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}


// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your order is empty. Please add something first.");

        return;
    }

    alert(
        "Thank you for ordering from Jesse's Coffee! ☕\n\n" +
        "Your order has been received."
    );

    cart = [];

    updateCart();

    closeCart();
}


// =========================
// CONTACT FORM
// =========================

document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("form-message").textContent =
            `Thanks ${name}! Your message has been received. ☕`;

        this.reset();
    });


// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close cart when clicking outside
window.addEventListener("click", function(event) {

    const modal = document.getElementById("cart-modal");

    if (event.target === modal) {
        closeCart();
    }

});
