let array: number[] = [-42, 17, -8, 33, -5, 99, -23];
let aux: number = 0;
function Retornar_terceiro_menor_maior(array: number[]): number[]{ 
let array_final: number[] = []
for(let i=0;i < array.length;i++){
    for(let x=i+1;x<array.length;x++){
        if (array[i] > array[x]){
            aux = array[x]
            array[x] = array[i]
            array[i] = aux
        }
    }
}
array_final[0] = array[2]
array_final[1] = array[array.length-3]
return array_final
}

console.log(Retornar_terceiro_menor_maior(array))


