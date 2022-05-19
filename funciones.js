var mensajeDeEntrada = document.querySelector("#mensaje"); //se selecciona el campo de texto que dice "Ingrese su mensaje"
var mensajeDeSalida = document.querySelector("#resultado"); ////se selecciona el campo de texto que dice "Resultado"

var botonCifrar = document.querySelector(".cifrar"); 
var botonDecifrar = document.querySelector(".decifrar");
var botonCopiar = document.querySelector(".copiar");
var botonPegar = document.querySelector(".pegar");

function cifrar (){ 
    var mensaje = mensajeDeEntrada.value; //se crea la variable mensaje a la que se le asigna el valor de lo escrito en el campo de texto mensaje, esto sería el texto a decifrar
    var mensajeCifrado = mensaje // se crea la variablemensajeCifrado a la que se le asigna la variable mensaje.

    .replaceAll("e", "enter")   //la funcion replaceAll reemplaza recibe dos parametros, y reemplazará el primer argumento con el segundo cada vez que aparezca.
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")

    mensajeDeSalida.value = mensajeCifrado; //al final esta funcion asignará el valor de la variable mensajeCifrado (que pasó por la funcion replaceAll) al valor de la variable global mensajeDeSalida
}

function decifrar (){//esta funcion hace lo mismo que cifrar pero cambia de lugar los caracteres que habian sido cifrados.
    var mensajeCifrado = mensajeDeEntrada.value;
    var mensaje = mensajeCifrado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")

    mensajeDeSalida.value = mensaje;
}

function copiar(){//esta funcion copia el texto que se encuentra en el campo resultado, es decir el mensaje cifrado
    var mensajeCifrado = mensajeDeSalida.value;
    navigator.clipboard.writeText(mensajeCifrado);
    mensajeDeEntrada.value = "";
    mensajeDeEntrada.focus();
}

function pegar(){//esta funcion pega el texto que se encuentra en el portapapeles en el campo de texto mensaje
    var mensajeCifrado = mensajeDeSalida.value;
    navigator.clipboard.readText(mensajeCifrado)
    .then(texto => mensajeDeEntrada.value = texto)
    mensajeDeEntrada.value = "";
    mensajeDeEntrada.focus();
}

botonCifrar.onclick = cifrar;
botonDecifrar.onclick = decifrar;
botonCopiar.onclick = copiar;
botonPegar.onclick = pegar;


//_______________________________________________________.
//canvas sacado de https://codepen.io/0utKast/pen/GpzobR |_______________________________________________________________

//Fuente Original :  http://timelessname.com/sandbox/matrix.html
//Configura el canvas para que ocupe la pantalla entera 
var columns = []
for (i = 0; i < 256; columns[i++] = 1);

function step() {
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, 1366, 70);
    canvas.getContext('2d').fillStyle = '#0F0';

    columns.map(function (value, index) {
        var character = String.fromCharCode(3e4 + Math.random() * 33);
        canvas.getContext('2d').fillText(character, index * 10, value);
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}

setInterval(step, 33)