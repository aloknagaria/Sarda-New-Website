// const navbar = document.getElementById("navbar");

// navbar.addEventListener("mouseenter", () => {
//     navbar.style.display = "block" ;
// });

// navbar.addEventListener("mouseleave", () => {
//     navbar.style.display = "none";
// });

const navbar = document.getElementById("navbar");

navbar.addEventListener("mouseenter", () => {
    navbar.style.top = "0";
});

navbar.addEventListener("mouseleave", () => {
    navbar.style.top = "-50px";
});

