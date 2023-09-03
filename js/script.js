window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

const currentPlayer = document.querySelector('.currentPlayer');

let selected;
let player = 'X';

function iniciar() {

    currentPlayer.innerHTML = 'vez de: '+player;

    document.querySelectorAll(".board button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener('click', jogada);
    });
}

iniciar(); 

function jogada(e) {
    e.target.innerHTML = player;
    e.target.removeEventListener("click", jogada)

    if(player == 'X'){
        player = 'O'
    }else{
        player = 'X'
    }

    verifica();

    currentPlayer.innerHTML = 'vez de: '+player
}

function verifica() {
    let quadrados = [];
    const botoes = document.querySelectorAll(".board button")
    for(let i = 0; i < botoes.length; i++){
        quadrados[i] = botoes[i].innerHTML;
    }

    //horizontal
    if(quadrados[0] != '' && quadrados[1] != '' && quadrados[2] != ''){
        if(quadrados[0] == quadrados[1] && quadrados[1] == quadrados[2]){
            ganhar(quadrados[0])
        }
    }

    if(quadrados[3] != '' && quadrados[4] != '' && quadrados[5] != ''){
        if(quadrados[3] == quadrados[4] && quadrados[4] == quadrados[5]){
            ganhar(quadrados[3])
        }
    }

    if(quadrados[6] != '' && quadrados[7] != '' && quadrados[8] != ''){
        if(quadrados[6] == quadrados[7] && quadrados[7] == quadrados[8]){
            ganhar(quadrados[6])
        }
    }

    //vertical
    if(quadrados[0] != '' && quadrados[3] != '' && quadrados[6] != ''){
        if(quadrados[0] == quadrados[3] && quadrados[3] == quadrados[6]){
            ganhar(quadrados[0])
        }
    }

    if(quadrados[1] != '' && quadrados[4] != '' && quadrados[7] != ''){
        if(quadrados[1] == quadrados[4] && quadrados[4] == quadrados[7]){
            ganhar(quadrados[1])
        }
    }

    if(quadrados[2] != '' && quadrados[5] != '' && quadrados[8] != ''){
        if(quadrados[2] == quadrados[5] && quadrados[5] == quadrados[8]){
            ganhar(quadrados[2])
        }
    }

    //diagonal
    if(quadrados[0] != '' && quadrados[4] != '' && quadrados[8] != ''){
        if(quadrados[0] == quadrados[4] && quadrados[4] == quadrados[8]){
            ganhar(quadrados[0])
        }
    }

    if(quadrados[2] != '' && quadrados[4] != '' && quadrados[6] != ''){
        if(quadrados[2] == quadrados[4] && quadrados[4] == quadrados[6]){
            ganhar(quadrados[2])
        }
    }

    if(quadrados.indexOf('') == -1) empatar();
}

const textoGanhador = document.querySelector('.ganhador')

function ganhar(player) {
    textoGanhador.innerHTML = player+' ganhou a partida'
    iniciar();
}

function empatar(player){
    textoGanhador.innerHTML = 'empate'
    iniciar();
}