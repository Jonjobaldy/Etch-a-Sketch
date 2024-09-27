const container = document.querySelector("#container");
const promptButton = document.querySelector("button");
let gridSize = "";

function makeGrid(gridSize) {

    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);

        for (let j = 0; j < gridSize; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
            let darkness = 0;

            newCell.addEventListener("mouseover", () => {
                newCell.style.backgroundColor = randomBackgroundColor();
                if (darkness < 10){
                    darkness++;
                    newCell.style.opacity = darkness * 0.1;
                }
            })
            }
        }
}

promptButton.addEventListener("click", () => {
    gridSize = prompt("Please input grid size:");
    if (gridSize < 100){
        makeGrid(gridSize);
    } else {
        alert("Please enter a number below 100");
    }
})

function randomBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}