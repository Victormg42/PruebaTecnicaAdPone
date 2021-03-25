var textInfo = window.prompt("Escribe una cadena de caracteres");
window.alert("El texto introducido es "+ textInfo);
var string = textInfo;
// Convertimos el valor de string en un array que contendrá todos los caracteres que hemos introducido.
var array = Array.from(string);
//Inicializamos el contador a 1.
contador = 1;
for (let i = 0; i < array.length; i++) {
    // Recorre todo el array y va mostrando los resultados por pantalla.
    if (array[i] == array[i + 1]) {
        while (array[i] == array[i + 1]) {
            contador = contador + 1;
            i++;
        }
        // Mostramos por pantalla el array completo //
        window.alert( '["' + array[i] + '",' + contador + ']');
        contador = 1;
    } else {
        contador = 1;
        // Mostramos por pantalla el array completo //
        window.alert('["' + array[i] + '",'+ contador +']');
    }
}