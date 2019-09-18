class Mensagem {

    // Atribuindo valor padrão ao parametro caso não seja recebido valor

    constructor( texto="" ) {
        this._texto = texto
    }

    get texto() {
        return this._texto
    }

    set texto(texto) {
        this._texto = texto;
    }

}