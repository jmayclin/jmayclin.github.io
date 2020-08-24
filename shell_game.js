const HEIGHT = 6
const WIDTH = 7

var worker = new Worker('thimble.js', {type: "module"});
worker.onmessage = (e) => {
    console.log(`I should be making this move ${e.data.move} and the score is ${e.data.score}`)
    
    markCol(e.data.move, 1)
    state += e.data.move.toString()
    setCounter(e.data.score - state.length)

    imThinkingLeaveMeAlone = false
}

//players are 1 and 2
const PLAYERS = [1, 2]
const VALUES = [1, 2]
const COLORS = ["red", "blue"]

var imThinkingLeaveMeAlone = false

var board
var state = ""

var markCol = function( x, player) {
    for (let i = 0; i < HEIGHT; i++) {
        // everytime I have to write three equal signs I want to scream
        if (board[x][i].value === 0) {
            console.log(`found an empty ${JSON.stringify(board[x][i])} as ${x}${i}`)
            board[x][i].value = player === PLAYERS[0] ? VALUES[0] : VALUES[1]
            board[x][i].element.classList.add(player === PLAYERS[0] ? COLORS[0] : COLORS[1])
            madeMove = i
            return true
        }
    }
    return false
}

var playCol = function (x, player) {
    return function () {
        if (imThinkingLeaveMeAlone) {
            return
        }

        console.log("inside play col")
        if (markCol(x, player)) {
            imThinkingLeaveMeAlone = true;
            state+= (x + 1).toString()
            //worker.postMessage(state)
            setTimeout(function(){ worker.postMessage(state); }, 500);
        }
    }
}

var setCounter = function(value) {
    document.getElementById("counter").textContent = value.toString()
}

var initializeGame = function () {
    // column major ordering
    board = new Array(WIDTH)
    for (let i = 0; i < WIDTH; i++) {
        board[i] = new Array(HEIGHT)
    }

    var stones = document.querySelectorAll(".stone")
    var count = 0
    for (const stone of stones) {
        var mark = playCol(count % WIDTH, 2)
        stone.addEventListener("click", mark)

        board[count % WIDTH][HEIGHT - 1 - Math.floor(count / WIDTH)] = {
            "value": 0,
            "element": stone,
        }
        stone.setAttribute("row", HEIGHT - 1 - (count % HEIGHT))
        //stone.classList.add("red")
        count++
    }
    console.log(count)
}


initializeGame()
markCol(3, 1)
state += 4;
