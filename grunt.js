console.log("I'm alive")
onmessage = (e) => {
    console.log('i received it. yay')
    console.log(`The game state is ${e.data}`)
    self.postMessage({
        move: 5,
        score: 22 - Math.floor(e.data.length/2)
    })
}