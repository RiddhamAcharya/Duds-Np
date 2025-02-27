window.addEventListener("scroll", function () {
    let ham = document.querySelector('.ham');

    if (window.scrollY > 50) {
        ham.classList.add("fixed");
    } else {
        ham.classList.remove("fixed");
    }
});
window.addEventListener("scroll", function () {
    let close = document.querySelector('.close');

    if (window.scrollY > 50) {
        close.classList.add("fixed");
    } else {
        close.classList.remove("fixed");
    }
});

let ham = document.querySelector('.ham');
let close= document.querySelector('.close');
let navbar = document.querySelector('.navbar');
let lf = document.querySelector('.navbar .left');
let mf = document.querySelector('.navbar .mid');
let rf = document.querySelector('.navbar .right');

ham.addEventListener("click", function(){
    navbar.style.backgroundColor= "rgb(216, 216, 216)";
    navbar.classList.add("add");
    navbar.style.height="auto";
    navbar.style.position = "sticky";
    ham.style.display="none";
    close.style.display="block";
    close.style.right="22px";
    lf.style.display="block";
    mf.style.display="block";
    rf.style.display="block";
});
close.addEventListener("click",function(){
    navbar.style.backgroundColor="#fff";
    navbar.style.height = "2.2rem";
    ham.style.display="block";
    close.style.display="none";
    navbar.classList.remove('add');
    lf.style.display="none";
    mf.style.display="none";
    rf.style.display="none";
})