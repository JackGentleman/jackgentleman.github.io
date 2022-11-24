function make2DArray (cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 20;

var totalBombs = 20;

function setup () {
    createCanvas(201, 201);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    var options = [];
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }
    for (var n = 0; n < totalBombs; n++)
    {
        var index = floor(random(options.length));
        var choice = options[index];
        var i = choice[0];
        var j = choice[1];
        options.splice(index, 1);
        grid[i][j].bomb = true;
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].countBombs();
        }
    }
}

function mousePressed () {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
                checkWin();
                if (grid[i][j].bomb) {
                    gameOver();
                }
            }
        }
    }
}

const output = document.querySelector(".output");

function checkWin () {
    var cellsWithoutBombs = 0;
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (!grid[i][j].revealed && !grid[i][j].bomb)
            {
                cellsWithoutBombs ++;
            }
        }
    }
    if (cellsWithoutBombs == 0) {
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                grid[i][j].revealed = true;
            }
        }
        output.textContent = "Congratulations! You won! Click reset or refresh the page to play again.";
    }
}

function gameOver () {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].revealed = true;
        }
    }
    output.textContent = "Sorry, you lost. Click reset or refresh the page to try again.";
}

function draw () {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}