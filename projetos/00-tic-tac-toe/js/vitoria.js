const C0 = 0;
const C1 = 1;
const C2 = 2;
const C3 = 3;
const C4 = 4;
const C5 = 5;
const C6 = 6;
const C7 = 7;
const C8 = 8;

export function verificaVitoria(simbolo) {
    const CELULAS = document.querySelectorAll('.celula');
    const VERTICAL = vitoriaVertical(CELULAS, simbolo);
    const HORIZONTAL = vitoriaHorizontal(CELULAS, simbolo);
    const DIAGONAL = vitoriaDiagonal(CELULAS, simbolo);
    return (VERTICAL || HORIZONTAL || DIAGONAL);
}

const vitoriaVertical = function(CELULAS, simbolo) {
    const vitoriaPrimeiraColuna = (CELULAS[C0].textContent === simbolo
        && CELULAS[C3].textContent === simbolo
        && CELULAS[C6].textContent === simbolo);
    const vitoriaSegundaColuna = (CELULAS[C1].textContent === simbolo
        && CELULAS[C4].textContent === simbolo
        && CELULAS[C7].textContent === simbolo);
    const vitoriaTerceiraColuna = (CELULAS[C2].textContent === simbolo
        && CELULAS[C5].textContent === simbolo
        && CELULAS[C8].textContent === simbolo);
    return (vitoriaPrimeiraColuna
        || vitoriaSegundaColuna
        || vitoriaTerceiraColuna);
};

const vitoriaHorizontal = function(CELULAS, simbolo) {
    const vitoriaPrimeiraLinha = (CELULAS[C0].textContent === simbolo
        && CELULAS[C1].textContent === simbolo
        && CELULAS[C2].textContent === simbolo);
    const vitoriaSegundaLinha = (CELULAS[C3].textContent === simbolo
        && CELULAS[C4].textContent === simbolo
        && CELULAS[C5].textContent === simbolo);
    const vitoriaTerceiraLinha = (CELULAS[C6].textContent === simbolo
        && CELULAS[C7].textContent === simbolo
        && CELULAS[C8].textContent === simbolo);
    return (vitoriaPrimeiraLinha
        || vitoriaSegundaLinha
        || vitoriaTerceiraLinha);
};

const vitoriaDiagonal = function(CELULAS, simbolo) {
    const vitoriaDiagonalDireita = (CELULAS[C0].textContent === simbolo
        && CELULAS[C4].textContent === simbolo
        && CELULAS[C8].textContent === simbolo);
    const vitoriaDiagonalEsquerda = (CELULAS[C2].textContent === simbolo
        && CELULAS[C4].textContent === simbolo
        && CELULAS[C6].textContent === simbolo);
    return (vitoriaDiagonalDireita
        || vitoriaDiagonalEsquerda);
};
