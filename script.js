const container = document.querySelector("#container");

function makeGrid(gridSize) {

    for (let i = 0; i < gridSize; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        container.appendChild(newRow);

        for (let j = 0; j < gridSize; j++){
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
            }
        }
}

makeGrid(16);