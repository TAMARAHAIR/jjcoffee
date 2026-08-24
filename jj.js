// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Order button
const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {
    alert("Thank you for choosing Jesse's Coffee! ☕ Your order is coming soon.");
});

// Close mobile menu when a link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
