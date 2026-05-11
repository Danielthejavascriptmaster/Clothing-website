const filterBtn = document.getElementById("filter-close-btn");
const filterSection = document.querySelector(".filter-section");
const productSection = document.querySelector(".product-section");


filterBtn.addEventListener("click", function () {

    
    filterSection.style.display = "none";

    
    productSection.style.marginLeft = "0px";

    
    productSection.style.width = "100%";

    
    const openBtn = document.createElement("button");
    openBtn.textContent = ">";

    openBtn.style.position = "fixed";
    openBtn.style.top = "200px";
    openBtn.style.left = "20px";
    openBtn.style.padding = "10px";
    openBtn.style.backgroundColor = "white";
    openBtn.style.borderRadius = "8px";
    openBtn.style.cursor = "pointer";
    openBtn.style.zIndex = "999";

    document.body.appendChild(openBtn);

   
    openBtn.addEventListener("click", function () {

        
        filterSection.style.display = "flex";

        
        productSection.style.marginLeft = "220px";
        productSection.style.width = "auto";

        openBtn.remove();
    });
});