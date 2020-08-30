import init, {add, say_a_thing, do_the_magic} from './pkg/thimblerigger.js';
// must be compiled with web option

const runWasm = async () => {
    const thimble = await init("./pkg/thimblerigger_bg.wasm")
    console.log("wasm loaded")
    return thimble
}
runWasm().then(thimble => {
    console.log(`add function returns ${thimble.add(4, 24)}`)
    //var result = say_a_thing()
    var result = JSON.parse(do_the_magic("123456123456"))
    console.log(`string function returns ${result}`)
})