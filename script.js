const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("active");
    }
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

function showCategory(category){

    document.querySelector(".category-grid").style.display="none";


    document.querySelectorAll(".products-section").forEach(section=>{

        section.style.display="none";

    });


    document.getElementById(category).style.display="block";

}



function backToCategories(){

    document.querySelector(".category-grid").style.display="flex";


    document.querySelectorAll(".products-section").forEach(section=>{

        section.style.display="none";

    });

}
