var array = [42, 17, 8, 33, 5, 99, 23];
var aux = 0;
for (var i = 0; i < array.length; i++) {
    for (var x = i + 1; x < array.length; x++) {
        if (array[i] > array[x]) {
            aux = array[x];
            array[x] = array[i];
            array[i] = aux;
        }
    }
}
console.log(array);
