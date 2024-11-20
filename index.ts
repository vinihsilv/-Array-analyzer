let array: number[] = [42, 17, 8, 33, 5, 99, 23]
let aux: number = 0;

for(let i=0;i < array.length;i++){
    for(let x=i+1;x<array.length;x++){
        if (array[i] > array[x]){
            aux = array[x]
            array[x] = array[i]
            array[i] = aux
        }
    }
}
console.log(array)
