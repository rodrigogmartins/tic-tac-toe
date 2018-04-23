import {verificaVitoria} from './vitoria.js';

const VITORIASX = document.querySelector('#vitoriasdex');
const VITORIASO = document.querySelector('#vitoriasdeo');

export function adicionaSimbolo(e, jogadas) {
    const celulaId = e.target.id;
    const celulaHtml = document.querySelector(`button#${celulaId}`);
    celulaHtml.setAttribute('disabled', true);
    return (jogadas % 2 === 0)
        ? celulaHtml.textContent = 'X'
        : celulaHtml.textContent = 'O';
}

export function temVencedor() {
    return (verificaVitoria('X'))
        ? VITORIASX.value++
        : (verificaVitoria('O'))
            ? VITORIASO.value++
            : false;
}

export function desabilitarCelulas() {
    const CELULAS = document.querySelectorAll('.celula');
    for (const BOTAO of CELULAS) {
        BOTAO.setAttribute('disabled', true);
    }
}

export function reset() {
    const CELULAS = document.querySelectorAll('.celula');
    for (const BOTAO of CELULAS) {
        BOTAO.removeAttribute('disabled');
        BOTAO.innerHTML = '&nbsp;&nbsp;&nbsp;';
    }
}
