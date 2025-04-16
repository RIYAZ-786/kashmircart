
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
let index = 0;

function slide() {
index++;
if (index >= slides.length) index = 0;
track.style.transform = `translateX(-${1500 * index}px)`;
}

setInterval(slide, 3000);


document.addEventListener("DOMContentLoaded", function () {
    const productsLink = document.getElementById("products-link");
    const productsSection = document.getElementById("products");

    productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        productsSection.scrollIntoView({ behavior:"smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productsLink = document.getElementById("review-link");
    const productsSection = document.getElementById("review");

    productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        productsSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productsLink = document.getElementById("contact-link");
    const productsSection = document.getElementById("contact");

    productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        productsSection.scrollIntoView({ behavior: "smooth" });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const productsLink = document.getElementById("home-link");
    const productsSection = document.getElementById("home");

    productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        productsSection.scrollIntoView({ behavior:"smooth" });
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const searchBtn = document.getElementById("search-btn");
        const searchInput = document.getElementById("search-input");

        searchBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent body click from immediately hiding it
            searchInput.style.display = searchInput.style.display === "block" ? "none" : "block";
            if (searchInput.style.display === "block") {
                searchInput.focus();
            }
        });

        // Hide the input when clicking outside
        document.addEventListener("click", () => {
            searchInput.style.display = "none";
        });
    });

