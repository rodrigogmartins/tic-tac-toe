import { GameService } from './GameService.js'

document.addEventListener('DOMContentLoaded', function () {
    const GAME = new GameService()
    const TABULEIRO = document.querySelector('#tabuleiro')
    const NOVO_JOGO_BTN = document.querySelector('#novo')
    const RESET_BTN = document.querySelector('#reset')
    const MAXJOGADAS = 9
    let jogadas = 0
    let jogoAcabou = false

    TABULEIRO.addEventListener('click', function (e) {
        if (
            e.target.className === 'celula' &&
            e.target.getAttribute('disabled') !== 'true' &&
            !jogoAcabou &&
            jogadas < MAXJOGADAS
        ) {
            const celula = e.target
            const celulas = document.querySelectorAll('.celula')
            const simbolo = jogadas % 2 === 0 ? 'X' : 'O'

            GAME.realizaJogada(celula, simbolo)
            jogadas++

            if (GAME.verificaVitoria(celulas, simbolo)) {
                jogoAcabou = true
                desabilitarCelulas()
                contabilizaResultado(simbolo)
            } else if (jogadas === MAXJOGADAS) {
                jogoAcabou = true
                desabilitarCelulas()
                contabilizaResultado('EMPATE')
            }
        }
    })

    NOVO_JOGO_BTN.addEventListener('click', reset)

    RESET_BTN.addEventListener('click', function () {
        reset()
        resetResultado()
    })

    function contabilizaResultado (simbolo) {
        const seletores = {
            X: '#vitoriasJogador1',
            O: '#vitoriasJogador2',
            EMPATE: '#empates'
        }

        console.log(seletores[simbolo])
        const contador = document.querySelector(seletores[simbolo])
        contador.value++
    }

    function resetResultado () {
        document.querySelector('#vitoriasJogador1').value = 0
        document.querySelector('#vitoriasJogador2').value = 0
        document.querySelector('#empates').value = 0
    }

    function desabilitarCelulas () {
        const CELULAS = document.querySelectorAll('.celula')

        for (const BOTAO of CELULAS) {
            BOTAO.setAttribute('disabled', true)
        }
    }

    function reset () {
        jogadas = 0
        jogoAcabou = false
        const CELULAS = document.querySelectorAll('.celula')

        for (const BOTAO of CELULAS) {
            BOTAO.removeAttribute('disabled')
            BOTAO.innerHTML = '&nbsp;&nbsp;&nbsp;'
        }
    }
})
