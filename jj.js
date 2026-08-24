/* =================================
   JESSE'S COFFEE HOUSE
   JAVASCRIPT
================================= */

let cart = [];


/* =================================
   ADD ITEM TO CART
================================= */

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

    alert(name + " has been added to your order!");
}


/* =================================
   UPDATE CART
================================= */

function updateCart() {

    const cartContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartContainer.innerHTML = "";

    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    } else {

        cart.forEach((item, index) => {

            const itemTotal = item.price * item.quantity;

            total += itemTotal;
            itemCount += item.quantity;

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <div>
                    <strong>${item.name}</strong>
                    <br>
                    ₦${item.price.toLocaleString()} each
                </div>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <strong style="margin: 0 12px;">
                        ${item.quantity}
                    </strong>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                    <span style="margin-left: 20px;">
                        ₦${itemTotal.toLocaleString()}
                    </span>

                    <button
                        onclick="removeItem(${index})"
                        style="
                            margin-left:15px;
                            background:#b52b2b;
                            border:none;
                            color:white;
                            padding:7px 10px;
                            border-radius:5px;
                            cursor:pointer;
                        "
                    >
                        Remove
                    </button>

                </div>
            `;

            cartContainer.appendChild(cartItem);
        });
    }

    cartCount.textContent = itemCount;
    cartTotal.textContent = "₦" + total.toLocaleString();
}


/* =================================
   INCREASE QUANTITY
================================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


/* =================================
   DECREASE QUANTITY
================================= */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);
    }

    updateCart();
}


/* =================================
   REMOVE ITEM
================================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


/* =================================
   RATING SYSTEM
================================= */

function rate(number) {

    const buttons = document.querySelectorAll(".rating button");

    buttons.forEach((button, index) => {

        if (index < number) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

    document.getElementById("rating-result").textContent =
        `You rated Jesse's Coffee House ${number}/10 ⭐`;

}


/* =================================
   GO TO PAYMENT
================================= */

function goToPayment() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please choose something from the menu.");

        return;
    }

    document.getElementById("payment").scrollIntoView({
        behavior: "smooth"
    });

}


/* =================================
   ORDER FORM
================================= */

document
    .getElementById("order-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        if (cart.length === 0) {

            alert(
                "Please add at least one item to your order before submitting."
            );

            return;
        }

        const customerName =
            document.getElementById("customer-name").value;

        const reference =
            document.getElementById("transfer-reference").value;

        let orderSummary = "";

        cart.forEach(item => {

            orderSummary +=
                `${item.name} x${item.quantity}\n`;

        });

        alert(
            `Thank you, ${customerName}!\n\n` +
            `Your order has been received.\n\n` +
            `Order:\n${orderSummary}\n` +
            `Transfer Reference: ${reference}\n\n` +
            `Jesse's Coffee House will confirm your payment.`
        );

        cart = [];

        updateCart();

        document.getElementById("order-form").reset();

    });


/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


/* =================================
   INITIALIZE CART
================================= */

updateCart();
