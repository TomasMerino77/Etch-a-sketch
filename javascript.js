const container = document.querySelector("#container");
// const square = document.createElement("div");

function Grid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            // square.textContent = `${i}, ${j}`;
        }
    }
}

Grid();

const square = document.querySelectorAll(".square");
square.forEach((square) => 
    square.addEventListener("mouseover", () => {
        console.log("hovered");
        square.style.backgroundColor = "blue";
}));