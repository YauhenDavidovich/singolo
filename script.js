const Nav = document.getElementById("menu");
Nav.addEventListener("click", (event) => {
    Nav.querySelectorAll("li").forEach(el => el.classList.remove("current"));    
    event.target.classList.add("current");
});
