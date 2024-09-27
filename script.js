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
            newCell.addEventListener("mouseover", () => {
                newCell.classList.add("hoverCell");
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
