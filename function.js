const filterBtn = document.getElementById("filter-close-btn");
const filterSection = document.querySelector(".filter-section");
const productSection = document.querySelector(".product-section");

// CLOSE FILTER
filterBtn.addEventListener("click", function () {

    // hide filter
    filterSection.style.display = "none";

    // REMOVE the forced spacing (THIS is your main fix)
    productSection.style.marginLeft = "0px";

    // optional: make it feel full width
    productSection.style.width = "100%";

    // create open button
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

    // OPEN FILTER
    openBtn.addEventListener("click", function () {

        // show filter again
        filterSection.style.display = "flex";

        // restore spacing (IMPORTANT)
        productSection.style.marginLeft = "220px";
        productSection.style.width = "auto";

        openBtn.remove();
    });
});