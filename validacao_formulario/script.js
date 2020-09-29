let input = document.querySelectorAll("form .focus");

input.forEach(item => {
    item.addEventListener("focus", () => {
        item.style.borderColor = "#65e694";
    });
});

input.forEach(item => {
    item.addEventListener("blur", () => {
        item.style.borderColor = "#CCC";
    })
})