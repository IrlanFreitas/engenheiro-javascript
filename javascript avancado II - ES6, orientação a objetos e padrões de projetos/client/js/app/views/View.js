class View {

    constructor(elemento) {
        this._elemento = elemento
    }

    // Recurso utilizado para obrigar as classes
    // Filhas a implementar o método

    template() {
        throw new Error(`O método template deve ser implementado`)
    }
    
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo)
    }

}