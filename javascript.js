const container = document.querySelector("#container");
let square;

function Grid(size = 16) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
    square = document.querySelectorAll(".square");
}
Grid();


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "blue";
    }
});

const sizeButton = document.querySelector("#selector");
sizeButton.addEventListener("click", () => {
    //Choose the size
    let boardSize = prompt("Select the size of the board. Enter a number between 2 and 100");
    if (boardSize === null) return;
    while (isNaN(boardSize) || boardSize < 2 || boardSize > 100) { 
        boardSize = prompt("Incorrect imput, select a value between 2 and 100")
        if (boardSize === null) return;
    }
    //Eliminates the old board
    container.innerHTML = "";
    //Calls the function Grid with the new size
    Grid(boardSize);
    //Changes the size of the squares
    let sqrSize = 900 / boardSize;
    square.forEach((sqr) => {
        sqr.style.width = `${sqrSize}px`;
        sqr.style.height = `${sqrSize}px`;
    })
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    square.forEach((sqr) => {
        sqr.style.backgroundColor = "darkgray";
    })
});