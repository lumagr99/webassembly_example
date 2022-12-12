declare function getInput(): string;
declare function clearOutput(): void;
declare function addHTMLToOutput(html: string): void;

let values = [];

function mergeSort(values: string[]) : string[]{
    if(values.length <= 1){
        return values;
    }
    let middle = Math.floor(values.length / 2);
    let left = values.slice(0, i32(middle));
    let right = values.slice(i32(middle), values.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: string[], right: string[]) : string[]{
    let result = [""];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}

export function start(): string[]{
    let text_values = getInput();
    let values = text_values.split("\n");

    let sorted  = mergeSort(values); 

    clearOutput();
    sorted.forEach((value) => {
        addHTMLToOutput(value+" ");
    });


    return values;
}