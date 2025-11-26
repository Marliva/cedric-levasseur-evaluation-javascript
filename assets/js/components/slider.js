// slider.js

// Données du slider
const slidesData = [
    {
        img: "./assets/img/slider-1-1.webp",
        title: "Get up to 50% off Today Only!",
        subtitle: "Winter Sale For Auto Parts",
        buttonText: "Shop Now"
    },
    {
        img: "./assets/img/slider-1-2.webp",
        title: "50% off in all products",
        subtitle: "Latest & Powerful Engine For You",
        buttonText: "Shop Now"
    },
    {
        img: "./assets/img/slider-1-3.webp",
        title: "Get up to 25% off !",
        subtitle: "Summer Sale For Auto Parts",
        buttonText: "Shop Now"
    }
];

let currentSlide = 0;
let sliderInterval;

// Fonction pour créer le slider
function createSlider() {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    // Vider le contenu existant
    heroSection.innerHTML = "";

    // Créer le conteneur du slider
    const sliderContainer = document.createElement("div");
    sliderContainer.id = "sliderContainer";

    // Créer chaque slide
    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement("div");
        slideDiv.classList.add("slide");
        if (index === 0) slideDiv.classList.add("active");

        slideDiv.innerHTML = `
            <div class="slide-img" style="background-image: url('${slide.img}')">
                <div class="slide-content">
                    <h2>${slide.title}</h2>
                    <h3>${slide.subtitle}</h3>
                    <button>${slide.buttonText}</button>
                </div>
            </div>
        `;

        sliderContainer.appendChild(slideDiv);
    });


    heroSection.appendChild(sliderContainer);

    // Démarrer le slider automatique
    startSlider();
}

// Fonction pour changer de slide
function changeSlide() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.classList.remove("active"));

    // Incrémenter le slide actuel
    currentSlide = (currentSlide + 1) % slidesData.length;

    slides[currentSlide].classList.add("active");
}

// Fonction pour démarrer le slider automatique
function startSlider() {
    sliderInterval = setInterval(changeSlide, 5000);
}

// Initialiser le slider au chargement
document.addEventListener("DOMContentLoaded", createSlider);

export { createSlider };