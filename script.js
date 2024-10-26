let lista = ["luz1", "luz2","luz3","luz4","luz5"]
let tempo = 1000
let todas_luzes_apagadas = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num_random = getRandomInt(6000,8000)

function comecar() {
    for(let i=0; i< lista.length-1; i++) {
        setTimeout(() => {
            var mudanca = document.getElementById(lista[i]);
        mudanca.style.backgroundColor = "rgb(53, 54, 54)"; 
        }, tempo); 
        tempo += 1250;
    }

    setTimeout(() => {
        var mudanca = document.getElementById(lista[4]);
        mudanca.style.backgroundColor = "rgb(53, 54, 54)";
        contar_tempo();
    }, num_random); 
    

}

let seconds = 0;
let milisegundos = 0;

function contar_tempo() {
    intervalo = setInterval(() => {
        milisegundos+=10;
        if (milisegundos > 1000) {
            seconds += 1
            milisegundos = 0;
        }
        document.getElementById("tempo").textContent = seconds + " : " + milisegundos;
    }, 10); 
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}
