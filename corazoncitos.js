document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".heart-container");

    setInterval(() => {
        const isCode = Math.random() < 0.2; // 20% probabilidad de mostrar </>
        let element;

        if (isCode) {
            element = document.createElement("div");
            element.classList.add("code-symbol");
            element.innerText = "</>";
        } else {
            element = document.createElement("div");
            element.classList.add("heart");
        }

        element.style.left = Math.random() * 80 + 10 + "%";
        element.style.bottom = "0px";
        element.style.animationDuration = (2 + Math.random() * 2) + "s";
        element.style.opacity = Math.random();

        container.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 4000);
    }, 400); // Espaciado más relajado
});