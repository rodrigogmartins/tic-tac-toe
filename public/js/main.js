import { GameService } from './GameService'

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
            e.target.tagName === 'BUTTON' &&
            jogadas < MAXJOGADAS &&
            !jogoAcabou
        ) {
            const celulaId = e.target.id
            const celulas = document.querySelectorAll('.celula')
            const simbolo = jogadas % 2 === 0 ? 'X' : 'O'

            GAME.realizaJogada(celulaId, simbolo)
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
            X: '#vitoriasdex',
            O: '#vitoriasdeo',
            EMPATE: '#empates'
        }

        const contador = document.querySelector(seletores[simbolo])
        contador.value++
    }

    function resetResultado () {
        document.querySelector('#vitoriasdex').value++
        document.querySelector('#vitoriasdeo').value++
        document.querySelector('#empates').value++
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
