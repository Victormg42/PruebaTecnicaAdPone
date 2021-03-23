function getValue() {
    var string = document.getElementById("string").value;
    // Convertimos el valor de string en un array que contendrá todos los caracteres que hemos introducido.
    var array = Array.from(string);
    var msg = document.getElementById("msg");
    msg.innerHTML = '';
    contador = 1;
    
    for (let i = 0; i < array.length; i++) {
        // Sí el valor de i es igual a 0, escribiremos el primer corchete.
        if (i == 0) {
            msg.innerHTML += '[';
        }

        // Recorre todo el array y va mostrando los resultados por pantalla.
        if (array[i] == array[i + 1]) {
            while (array[i] == array[i + 1]) {
                contador = contador + 1;
                i++;
            }

            // Insertamos en el html la estructura de como queremos que nos aparezcan los array.
            msg.innerHTML += '["' + array[i] + '",' + contador + ']';
            contador = 1;
        } else {
            contador = 1;
            msg.innerHTML += '["' + array[i] + '",1]';
        }

        // Sí al recorrer el array, el valor de i + 1 es mas pequeño que la longitud de array, mostramos la "," por pantalla.
        if (i + 1 < array.length) {
            msg.innerHTML += ', ';
        }
        
        // Sí el valor de i es igual a la longitud del array - 1, cerramos el output de que se muestra en la vista.
        if (i == array.length - 1) {
            msg.innerHTML += ']';
        }
    }
}