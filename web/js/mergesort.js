let values = [];

async function mergeSort(values) {
    if (values.length < 2) {
        return values;
    }
    
    let middle = Math.floor(values.length / 2);
    let left = values.slice(0, middle);
    let right = values.slice(middle, values.length);
    
    return await merge(await mergeSort(left), await mergeSort(right));
}

async function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    
    while (left.length)
        result.push(left.shift());
    
    while (right.length)
        result.push(right.shift());
    return result;
}

export async function start(){
    let values = document.getElementById("input").innerHTML.split("\n");
    values = await mergeSort(values);   

    document.getElementById("output").innerHTML = "";

    for (let i = 0; i < values.length; i++) {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + values[i] + " ";
    }
}