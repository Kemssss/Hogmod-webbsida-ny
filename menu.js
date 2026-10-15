const toggle = document.querySelector(".menu-toggle");
if (toggle) {
    toggle.addEventListener("click", function () {
        const open = document.querySelector("nav").classList.toggle("open");
        this.setAttribute("aria-expanded", open);
    });
}