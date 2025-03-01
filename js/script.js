
window.addEventListener("scroll", function () {
    document.querySelectorAll('.ham, .close').forEach(el => {
        el.classList.toggle("fixed", window.scrollY > 50);
    });
});

const ham = document.querySelector('.ham');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.navbar .left, .navbar .mid, .navbar .right');

ham.addEventListener("click", function () {
    navbar.style.backgroundColor = "rgb(216, 216, 216)";
    navbar.classList.add("add");
    navbar.style.height = "auto";
    navbar.style.position = "sticky";
    ham.style.display = "none";
    close.style.display = "block";
    close.style.right = "22px";
    sections.forEach(section => section.style.display = "block");
});

close.addEventListener("click", function () {
    navbar.style.backgroundColor = "#fff";
    navbar.style.height = "2.2rem";
    navbar.classList.remove('add');
    ham.style.display = "block";
    close.style.display = "none";
    sections.forEach(section => section.style.display = "none");
});



// Cart scroll effect
window.addEventListener("scroll", function () {
    document.querySelector('.cart').classList.toggle("sc", window.scrollY > 50);
});

const cartElement = document.querySelector('.cart');
const cartClose = document.querySelector('.cl');
const cartClick = document.querySelector(".crt");
const cloose = document.getElementById("closecart");

cartClick.addEventListener("click", function () {
    cartElement.classList.add('cartclick');
    renderCart();
});

cartClose.addEventListener("click", function () {
    cartElement.classList.remove("cartclick");
});
cloose.addEventListener("click",function(){
    cartElement.classList.remove("cartclick");
})

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

document.querySelectorAll(".cartbutton").forEach(button => {
    button.addEventListener("click", function () {
        const product = this.parentElement;
        const id = product.getAttribute("data-id");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));

        let item = cart.find(p => p.id === id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        renderCart();
    });
});

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function renderCart() {
    const cartItemContainer = document.querySelector(".listcart");
    const totalElement = document.getElementById("total-price");

    cartItemContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: Rs.${item.price}</p>
            <p>Quantity: 
                <button class="decrease" data-id="${item.id}">-</button> 
                ${item.quantity} 
                <button class="increase" data-id="${item.id}">+</button>
            </p>
            <button class="remove" data-id="${item.id}">Remove</button>
        `;

        cartItemContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalElement.innerText = `Rs. ${totalPrice}`;
}

document.querySelector(".listcart").addEventListener("click", function (e) {
    const id = e.target.getAttribute("data-id");

    if (e.target.classList.contains("increase")) {
        const item = cart.find(item => item.id === id);
        if (item) item.quantity++;
    } else if (e.target.classList.contains("decrease")) {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
        } else {
            cart = cart.filter(item => item.id !== id);
        }
    } else if (e.target.classList.contains("remove")) {
        cart = cart.filter(item => item.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
});

document.querySelector(".CheckOut").addEventListener("click", function () {
    alert("Checkout Successful!");
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
    renderCart();
});
