//import init from './pkg/thimblerigger.js';
importScripts('./pkg/thimblerigger.js')

for (var item in self) {
    console.log(item);
}
const thimble = wasm_bindgen().then(wasm => {
    console.log(wasm)
    console.log("I think it's loaded")
})
/*
const runWasm = async () => {
    const thimble = await init("./pkg/thimblerigger_bg.wasm")
    console.log("wasm loaded")
    return thimble
}
runWasm().then(thimble => {
    const result = thimble.add(4, 24)
    console.log(`result is ${result}`)
})

*/
