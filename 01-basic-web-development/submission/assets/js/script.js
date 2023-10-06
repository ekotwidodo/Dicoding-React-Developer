const menuToggle = document.querySelector(".menu-toggle");
const menuMain = document.querySelector(".menu");

/* Toggle menu appears in mobile menu */
function showToggleMenu () {
    if (menuMain.classList.contains("active")) {
        menuMain.classList.remove("active");

        // Adding the toggle icon
        menuToggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menuMain.classList.add("active");

        // Adding the close icon
        menuToggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

menuToggle.addEventListener("click", showToggleMenu, false);