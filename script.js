document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("is-open", !isOpen);
    });
}

document.querySelectorAll("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
});
