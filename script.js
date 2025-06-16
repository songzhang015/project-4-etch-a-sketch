/* JS File for Etch-a-Sketch Project */
let gridSize = 16;
let isMouseDown = false;
const grid = document.querySelector(".grid");

function createGrid(size) {
    grid.innerHTML = "";
    
    // Loop to initialize grid of size rows and cols (16x16)
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.flex = `0 0 calc(100% / ${size})`;
            grid.appendChild(square);
        }
    }

    // Add event listeners to every square block to turn black when held
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isMouseDown = true;
            square.style.backgroundColor = "black";
        });

        square.addEventListener("mousemove", (e) => {
            e.preventDefault();
            if (isMouseDown) {
            square.style.backgroundColor = "black";
            }
        });
    });
}

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// Button for changing size of grid and resetting board
const button = document.querySelector("button");
const clearButton = document.querySelector(".clearButton");
const pText = document.querySelector("p");

button.addEventListener("click", () => {
    size = Number(prompt("Enter grid size: (1-64)"));
    if (size < 1 || size > 64) {
        setTimeout(function() {
            pText.textContent = "";
        }, 5000);
        pText.textContent = "Error: Grid size must be between 1-64";
    } else {
        gridSize = size;
        createGrid(gridSize);
    }
});

clearButton.addEventListener("click", () => {
    createGrid(gridSize);
})

createGrid(gridSize);