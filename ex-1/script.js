const btn = document.querySelector(".j-btn");
const icon = btn.querySelectorAll(".btn-icon");

btn.addEventListener("click", () => {
    icon.forEach(icon => {
        icon.classList.toggle("inactive")
    })
})