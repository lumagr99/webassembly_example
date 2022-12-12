window.fibonacci = function fibonacci(){ return 0; };

export async function run(fib) {  
  let times = [[],[],[]];
  fibonacci = fib;
  for (let i = 0; i < 2; i++) {
    console.log(i)
    // s
    times[0].push(start(100, 10));
    // m
    times[1].push(start(1000, 100));
    // l
    times[2].push(start(10000, 1000)); 
  }
  printTimes(times[0], "s_");
  printTimes(times[1], "m_");
  printTimes(times[2], "l_");
}

  function start(rounds, show){
    cleanTable();
    let t0 = performance.now();
    Array.from({length: rounds}, (x, i) =>(fibonacci(i, show)))
    let t1 = performance.now();
    return t1 - t0;
  }

  function printTimes(times, prefix){
    let sum = times.reduce((a, b) => a + b, 0);
    let avg = sum / times.length;
    document.getElementById(prefix + "time").innerHTML = avg;
  }

  function cleanTable(){
    document.getElementById("table").innerHTML = "";
  }