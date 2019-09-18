class MensagemView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(modelo) {
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`
    }

    // Consegui sobrescrever o método
    // Porém, não consegui acessar os atributos
    // da clase pai

    // Não é necessário super. para acessar os elementos 
    // do pai e sim this.

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo)

        setTimeout(() => {
            this._elemento.innerHTML = ''
        },3000)
    }

}