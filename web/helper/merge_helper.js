window.mergesort = function mergesort(){ return 0; };

export async function run(extern_func) {  
  mergesort = extern_func;

    let times = [[],[],[],[],[],[]];
    let values100 = await readFile("http://localhost/wasm/input/100.txt");
    let values250 = await readFile("http://localhost/wasm/input/250.txt");
    let values500 = await readFile("http://localhost/wasm/input/500.txt");
    let values1000 = await readFile("http://localhost/wasm/input/1000.txt");
    let values5000 = await readFile("http://localhost/wasm/input/5000.txt");
    let values10000 = await readFile("http://localhost/wasm/input/10000.txt");
    for (let i = 0; i < 5; i++) {
      console.log(i)
      // xs
      times[0].push(await start(values100));
      // s
      times[1].push(await start(values250));
      // m
      times[2].push(await start(values500));
      // l
      times[3].push(await start(values1000));
      // xl
      times[4].push(await start(values5000));
      // xxl
      times[5].push(await start(values10000));
    }
    //console.log(times)
    printTimes(times[0], "xs_");
    printTimes(times[1], "s_");
    printTimes(times[2], "m_");
    printTimes(times[3], "l_");
    printTimes(times[4], "xl_");
    printTimes(times[5], "xxl_");
  }

  async function start(values){
    document.getElementById("input").innerHTML=values

    let t0 = performance.now();
    await mergesort();
    let t1 = performance.now();
    return t1 - t0;
  }

  function printTimes(times, prefix){
    let sum = times.reduce((a, b) => a + b, 0);
    let avg = sum / times.length;
    document.getElementById(prefix + "time").innerHTML = avg;
  }

async function readFile(filepath){
  let values = "";
  
  await fetch(filepath)
  .then(res => res.text()) // Gets the response and returns it as a blob
  .then(text => {
    values = text.replaceAll("\r", "")
  });
  return values;
}