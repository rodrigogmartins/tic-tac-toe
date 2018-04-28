import {adicionaSimbolo, temVencedor, desabilitarCelulas,
    VITORIASO, VITORIASX, reset} from './funcoesTabuleiro.js';

document.addEventListener('DOMContentLoaded', function() {
    const TABULEIRO = document.querySelector('#tabuleiro');
    const RESET = document.querySelector('#reset');
    const NOVO = document.querySelector('#novo');
    const JOGADOR1 = document.querySelector('#jogador1');
    const JOGADOR2 = document.querySelector('#jogador2');
    const MAXJOGADAS = 9;
    const EMPATE = document.querySelector('#empates');
    let jogadas = 0;
    let alguemVenceu = false;


    TABULEIRO.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON'
            && jogadas <= MAXJOGADAS && !alguemVenceu) {
            adicionaSimbolo(e, jogadas);
            jogadas++;
            alguemVenceu = temVencedor();
            if (alguemVenceu) {
                desabilitarCelulas();
            } else if (jogadas === MAXJOGADAS && !alguemVenceu) {
                EMPATE.value++;
                desabilitarCelulas();
            }
        }
    });

    NOVO.addEventListener('click', function() {
        reset();
        alguemVenceu = false;
        jogadas = 0;
    });

    RESET.addEventListener('click', function() {
        reset();
        alguemVenceu = false;
        jogadas = 0;
        JOGADOR1.value = JOGADOR2.value = '';
        VITORIASO.value = VITORIASX.value = EMPATE.value = 0;
    });
});
