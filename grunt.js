console.log("I'm alive")
importScripts("minutes_of_study.js")
console.log("imported it")
console.log(minutes_of_study)
onmessage = (e) => {
    console.log('i received it. yay')
    console.log(`The game state is ${e.data}`)
    if (e.data in minutes_of_study) {
        console.log("found in cache")
        self.postMessage({
            move: minutes_of_study[e.data][0] - 1,
            score: minutes_of_study[e.data][1]
        })
    } else {
        self.postMessage({
            move: 5,
            score: 22 - Math.floor(e.data.length / 2)
        })
    }
}