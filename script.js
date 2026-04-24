const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const heroImage = document.querySelector(".hero-container img");

let images = [
    "assets/images/lamine-yamal-wearing-f50-pink.jpg",
    "assets/images/lamine-yamal-smiling-with-red-shades-pink-room.jpg",
    "assets/images/lamine-yamal-juggling-ball-with-pink-f50.jpg",
    "assets/images/lamine-yamal-pink-f50.avif",
    "assets/images/lamine-yamal-pink-f50-above-view.avif"
];

let currentIndex = 0;

function showSlide(index) {
    heroImage.src = images[index];
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showSlide(currentIndex);
}



rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);
