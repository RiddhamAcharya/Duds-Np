window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll('.ham, .close');
    elements.forEach(el => {
        if (window.scrollY > 50) {
            el.classList.add("fixed");
        } else {
            el.classList.remove("fixed");
        }
    });
});

let ham = document.querySelector('.ham');
let close = document.querySelector('.close');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.navbar .left, .navbar .mid, .navbar .right');

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
    ham.style.display = "block";
    close.style.display = "none";
    navbar.classList.remove('add');
    sections.forEach(section => section.style.display = "none");
});

 //Cart scroll
window.addEventListener("scroll",function(){
    let cr=document.querySelector('.cart');
    if (window.scrollY > 50) {
            cr.classList.add("sc");

        } else {
            cr.classList.remove("sc");

        }
})
    let cr=document.querySelector('.cart');
    let cl=document.querySelector('.cl');
    let clic=document.querySelector(".crt");
    let cloose = document.querySelector('cloose');


clic.addEventListener("click",function(){
    cr.classList.add('cartclick');
});

cl.addEventListener("click",function(){
    cr.classList.remove("cartclick");
});


