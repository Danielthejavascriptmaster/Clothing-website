/*const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const heroImage = document.getElementById("hero-image");

let images = [
    "assets/images/lamine-yamal-wearing-f50-pink.jpg",
    "assets/images/lamine-yamal-smiling-with-red-shades-pink-room.jpg",
    "assets/images/lamine-yamal-juggling-ball-with-pink-f50.jpg",
    "assets/images/lamine-yamal-pink-f50.avif",
    "assets/images/lamine-yamal-pink-f50-above-view.avif"
];

let currentIndex = 0;

rightArrow.addEventListener("click", function(){
    currentIndex++;
    nextSlide()
});

leftArrow.addEventListener("click", function(){
    if(currentIndex >= 0){
        currentIndex = currentIndex + 4;
    } 

    if(currentIndex === 4){
        currentIndex--;
    }
})

let nextSlide = function(){
    if(currentIndex === 0){
        heroImage.src = "assets/images/lamine-yamal-wearing-f50-pink.jpg"
    } 
    
    if(currentIndex === 1){
        heroImage.src = "assets/images/lamine-yamal-smiling-with-red-shades-pink-room.jpg"
    } 
    
    if(currentIndex === 2){
        heroImage.src = "assets/images/lamine-yamal-juggling-ball-with-pink-f50.jpg"
    } 
    
    if(currentIndex === 3){
        heroImage.src = "assets/images/lamine-yamal-pink-f50.avif"
    } 

    if(currentIndex === 4){
        heroImage.src = "assets/images/lamine-yamal-pink-f50-above-view.avif"
    }
}
    */

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const heroImage = document.getElementById("hero-image");


setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
 }, 3000);


let images = [
    "assets/images/lamine-yamal-wearing-f50-pink.jpg",
    "assets/images/lamine-yamal-smiling-with-red-shades-pink-room.jpg",
    "assets/images/lamine-yamal-foot-on-ball-pink-f50.jpg",
    "assets/images/akward-lamine-yamal-pink-f50.jpg",
    "assets/images/lamine-yamal-pink-f50.avif",
    "assets/images/lamine-yamal-pink-f50-above-view.avif"
];

let currentIndex = 0;

// Show image
function showSlide(index) {
    heroImage.src = images[index];

}

// Next button
rightArrow.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
});

// Previous button
leftArrow.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
});

// Show first image on load
showSlide(currentIndex);

