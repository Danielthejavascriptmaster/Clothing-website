const filterContent = document.querySelector(".filter-content");
const filterTitle = document.querySelectorAll(".filter-title");

const filterTitles = document.querySelectorAll(".filter-title");



filterTitles.forEach(title => {
  title.addEventListener("click", () => {
    
    const content = title.nextElementSibling;


    if(content.style.display === "flex"){
        content.style.display = "none"
    } else{
        content.style.display = "flex"
    }
  });
});


const closeButton = document.getElementById("close-button");
const filter = document.querySelector(".filters");
const productSection = document.querySelector(".product-section");
const openButton = document.createElement("button");

closeButton.addEventListener("click", function(){
    filter.style.display = "none";
    productSection.style.marginLeft = "0";

    

    
    openButton.id = "open-button";
    openButton.textContent = "☰";

    document.body.appendChild(openButton);


    
    
})

openButton.addEventListener("click", function(){   
    filter.style.display = "flex";
    productSection.style.marginLeft = "250px";
    openButton.remove();
}
)