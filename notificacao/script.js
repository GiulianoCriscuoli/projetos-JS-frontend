const btn = document.getElementById("button");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notify = document.createElement("div");
    notify.classList.add("toast");

    notify.innerText = "Alerta acionado!";

    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}


