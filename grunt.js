
/*import("./pkg").then(wasm => {
    wasm.init();
    console.log("loading")
    self.addEventListener("message", ev => {
      const num = Number(ev.data);
      if (!num) {
        self.postMessage({ allGood: false, error: ev.data + "is not a number!" });
        return;
      }
      try {
        const isPrime = wasm.is_prime(num);
        self.postMessage({ allGood: true, isPrime: isPrime });
      } catch (err) {
        self.postMessage({ allGood: false, error: err.message });
      }
    });
  }); */
  console.log("I am the web worker")
/*
importScripts("minutes_of_study.js")
importScripts("pkg/thimblerigger.js")
//console.log(minutes_of_study)

//await init()

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
*/