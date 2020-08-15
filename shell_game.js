const HEIGHT = 6
const WIDTH = 7

//players are 1 and 2
const PLAYERS = [1, 2]
const VALUES = [1, 2]
const COLORS = ["red", "blue"]

var imThinkingLeaveMeAlone = false

var board
var state = ""

var playCol = function (x, player) {
    return function () {
        if (imThinkingLeaveMeAlone) {
            return
        }
        //imThinkingLeaveMeAlone = true
        state += x.toString()
        console.log(state)

        console.log("inside play col")
        let madeMove = -1
        for (let i = 0; i < HEIGHT; i++) {
            // everytime I have to write three equal signs I want to scream
            if (board[x][i].value === 0) {
                console.log(`found an empty ${JSON.stringify(board[x][i])} as ${x}${i}`)
                board[x][i].value = player === PLAYERS[0] ? VALUES[0] : VALUES[1]
                board[x][i].element.classList.add(player === PLAYERS[0] ? COLORS[0] : COLORS[1])
                madeMove = i
                break
            }
        }
        if (madeMove >= 0) {
            imThinkingLeaveMeAlone = true;
            state+= x.toString()
            //self.postMessage(state)
        }


        //self.postMessage()
    }
}

var setCounter = function(value) {
    document.getElementById("counter").textContent = "5"
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
playCol(1, 2)
setCounter(5)