const filterContent = document.querySelectorAll(".filter-content");
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


