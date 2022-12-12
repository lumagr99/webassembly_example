export function javascript(rounds, show){
    let table = document.getElementById("table");

    // Manufacture the element we're gonna append
    if (rounds % show == 0){
        let tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = rounds;
        tr.appendChild(td);

        let td2 = document.createElement("td");
        td2.innerHTML = fibo(rounds);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
      fibo(rounds)
  }

  function fibo(rounds){
    let z1 = BigInt(0);
    let z2 = BigInt(1);

    for (let i = 2; i <= rounds; i++){
        z2 = BigInt(z1 + z2);
        z1 = BigInt(z2 - z1);
    }

    if (rounds == 0){
        z2 = 0
    }
    return z2;
  }