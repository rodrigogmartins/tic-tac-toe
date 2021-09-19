export class GameService {
    realizaJogada (celula, simbolo) {
        celula.setAttribute('disabled', true)

        return (celula.textContent = simbolo)
    }

    verificaVitoria (celulas, simbolo) {
        return (
            this.vitoriaVertical(celulas, simbolo) ||
            this.vitoriaHorizontal(celulas, simbolo) ||
            this.vitoriaDiagonal(celulas, simbolo)
        )
    }

    vitoriaVertical (celulas, simbolo) {
        return (
            this.vitoria(celulas, 0, 3, simbolo) ||
            this.vitoria(celulas, 1, 3, simbolo) ||
            this.vitoria(celulas, 2, 3, simbolo)
        )
    }

    vitoriaHorizontal (celulas, simbolo) {
        return (
            this.vitoria(celulas, 0, 1, simbolo) ||
            this.vitoria(celulas, 3, 1, simbolo) ||
            this.vitoria(celulas, 6, 1, simbolo)
        )
    }

    vitoriaDiagonal (celulas, simbolo) {
        return (
            this.vitoria(celulas, 0, 4, simbolo) ||
            this.vitoria(celulas, 2, 2, simbolo)
        )
    }

    vitoria (celulas, indiceInicial, incremento, simbolo) {
        let result = true

        for (let i = indiceInicial, j = 0; j < 3; i += incremento, j++) {
            result = result && celulas[i].textContent === simbolo
        }

        return result
    }
}
