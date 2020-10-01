const btn = document.getElementById("button");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
})