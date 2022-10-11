const startBtn = document.querySelector('#startBtn');

startBtn.addEventListener('click',function () {

function aleatorio(minimo, maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var piedra = 0;
var papel = 1;
var tigera = 2;

var opciones = ["piedra", "papel", "tigera"];

var jugador;
var bot = aleatorio(0, 2);

jugador = prompt("elegi piedra:0, papel:1 o tigera:2" , 0);

alert("bot eligio " + opciones[bot]);

if(jugador == piedra){
    if(bot == piedra){
        alert("bot eligio piedra, empate");
    }
    else if(bot == papel){
        alert("bot eligio papel, perdiste malo");
    }
    else if(bot == tigera){
        alert("bot eligio tigera, ganaste");
    }
}

else if(jugador == papel){
    if(bot == piedra){
        alert("bot eligio piedra, ganaste");
    }
    else if(bot == papel){
        alert("bot eligio papel, empate");
    }
    else if(bot == tigera){
        alert("bot eligio tigera, perdiste malo");
    }
}

else if(jugador == tigera){
    if(bot == piedra){
        alert("bot eligio piedra, perdiste malo");
    }
    else if(bot == papel){
        alert("bot eligio papel, ganaste");
    }
    else if(bot == tigera){
        alert("bot eligio tigera, empate");
    }
}

else
{
    alert("elegi piedra papel o tigera tonto");
}

});