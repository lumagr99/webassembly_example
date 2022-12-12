declare function addHTMLToTable(html: string): void;

function fib(rounds: i32): i64 {
  let z1 = i64(0);
  let z2 = i64(1);

  for (let i = 2; i <= rounds; i++){
      z2 = i64(z1 + z2);
      z1 = i64(z2 - z1);
  }

  if (rounds == 0){
      z2 = 0
  }
  return z2;
}

export function printFibonacci(rounds: i32, show: i32): void {
  let result = fib(rounds);
  if(rounds % show == 0) {
    addHTMLToTable(`<tr><td>${rounds}</td><td>${result}</td></tr>`);
  }
}