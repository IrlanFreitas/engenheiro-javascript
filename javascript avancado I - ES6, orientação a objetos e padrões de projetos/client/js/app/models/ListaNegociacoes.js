class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    get negociacoes() {

        // Programação Defensiva
        // Devolvendo uma cópia da lista
        // Com outra referência

        return [].concat(this._negociacoes)
    }

}