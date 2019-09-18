class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
        // * Usando o padrão Proxy para não ter efeitos no modelo
        // this._armadilha = armadilha
        // * Não mais necessário por conta das Arrow Functions
        // this._contexto = contexto
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
        // this._armadilha(this)

        // ! Mudando o contexto do This com a Api Reflection
        // * Reflect.apply(this._armadilha, this._contexto, [this])
    }

    get negociacoes() {

        // Programação Defensiva
        // Devolvendo uma cópia da lista
        // Com outra referência

        return [].concat(this._negociacoes)
    }

    esvazia() {
        this._negociacoes = []
        // this._armadilha(this)
        // Reflect.apply(this._armadilha, this._contexto, [this])
    }

}