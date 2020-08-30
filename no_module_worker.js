console.log("inside web worker")
//import init from './pkg/thimblerigger.js';
// must be compiled with web option
importScripts('./pkg/thimblerigger.js')
importScripts('minutes_of_study.js')
const {add, do_the_magic} = wasm_bindgen
async function run() {
    await wasm_bindgen('./pkg/thimblerigger_bg.wasm')
    console.log("It seems to have loaded?")
    console.log(`the result of 4 + 24 is ${add(4, 24)}`)
    console.log(`the best action for a state is ${do_the_magic("12345671234567")}`)
}

run()
console.log(minutes_of_study)

onmessage = (e) => {
    console.log(`[worker] the game state is ${e.data}`)
    if (e.data in minutes_of_study) {
        console.log(`[worker] found in cache, score ${minutes_of_study[e.data][1]}`)
        self.postMessage({
            move: minutes_of_study[e.data][0] - 1,
            score: minutes_of_study[e.data][1]
        })
    } else {
        console.log("[worker] calculating")
        console.time(`${e.data}`)
        let result = JSON.parse(do_the_magic(e.data))
        console.log(`[worker] calculated, score ${result.utility}`)

        console.timeEnd(`${e.data}`)
        self.postMessage({
            move: result.action - 1,
            score: result.utility
        })
    }
}