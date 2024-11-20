var array = [42, 17, 8, 33, 5, 99, 23];
var aux = 0;
var tamanho_array = array.length;
function Retornar_terceiro_menor_maior(array) {
    var array_final = [];
    for (var i = 0; i < array.length; i++) {
        for (var x = i + 1; x < array.length; x++) {
            if (array[i] > array[x]) {
                aux = array[x];
                array[x] = array[i];
                array[i] = aux;
            }
        }
    }
    array_final[0] = array[2];
    array_final[1] = array[array.length - 3];
    return array_final;
}
console.log(Retornar_terceiro_menor_maior(array));
