let lista = ["luz1", "luz2","luz3","luz4","luz5"]
let tempo = 1000
let todas_luzes_apagadas = false;
let contador = 0;

function botao() {
    if (contador === 0) {
        document.getElementById("pronto").textContent = "Clique qnd as luzes apagarem";
        contador += 1
        return comecar();
    }
    else if (contador === 1) {
        contador += 1
        return parar();
    }
    else if(contador === 2) {
        contador += 1
        return resetar()
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num_random = getRandomInt(4500,9000)

function comecar() {
    let tempo = 1000;
    for(let i=0; i< lista.length-1; i++) {
        setTimeout(() => {
            var mudanca = document.getElementById(lista[i]);
            mudanca.style.backgroundColor = "rgb(53, 54, 54)"; 
        }, tempo); 
        tempo += 1100;
    }

    setTimeout(() => {
        var mudanca = document.getElementById(lista[4]);
        mudanca.style.backgroundColor = "rgb(53, 54, 54)";
        todas_luzes_apagadas = true
        contar_tempo();
    }, num_random); 
    

}

let seconds = 0;
let milisegundos = 0;

function contar_tempo() {
    
    let startTime = Date.now();
    intervalo = setInterval(() => {
        const tempo_passado = Date.now() - startTime;
        seconds = Math.floor(tempo_passado / 1000);
        milisegundos = tempo_passado % 1000;
        document.getElementById("tempo").textContent = seconds + " : " + milisegundos;
    }, 10); 
}

function parar() {
    if (todas_luzes_apagadas) {
        clearInterval(intervalo);
        intervalo = null;
    }
    else {
        alert("Pulou largada!")
        return resetar()
    }
}

function resetar() {
    clearInterval(intervalo)
    seconds = 0
    milisegundos = 0


    var mudanca = document.getElementById(lista[0])
    mudanca.style.backgroundColor = "red";

    var mudanca = document.getElementById(lista[1])
        mudanca.style.backgroundColor = "red";

    var mudanca = document.getElementById(lista[2])
    mudanca.style.backgroundColor = "red";
    
    var mudanca = document.getElementById(lista[3])
    mudanca.style.backgroundColor = "red";

    var mudanca = document.getElementById(lista[4])
    mudanca.style.backgroundColor = "red";

    todas_luzes_apagadas = false
    document.getElementById("pronto").textContent = "Pronto?";
    tempo = 1000
    document.getElementById("tempo").textContent = "0.000"
    contador = 0;
}
