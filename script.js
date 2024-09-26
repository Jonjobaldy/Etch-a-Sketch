const container = document.querySelector("#container");

function makeGrid(rows, columns) {

}

function makeRows(rows){
    for (let i = 0; i < rows; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        container.appendChild(newCell);
    }
}

makeRows(16);

function makeColumns(columns){

}