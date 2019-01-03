class NegociacaoController {

    constructor() {
        // Baseado em high order functions
        // Em vez de utilizar document.querySelector, event.target.querySelector()
        // Usando o método bind para que não seja perdida a referência ao documento e
        // que assim funcione

        // Os elementos foram trazidos para cá, para que não seja
        // necessário percorrer o DOM diversas vezes

        let $ = document.querySelector.bind( document );
        this._inputQuantidade = $("#quantidade")
        this._inputData = $("#data")
        this._inputValor = $("#valor")
    }

    adiciona(event) {
        // Cancelando o submit que recarrega a página
        event.preventDefault()
        
        console.log(this._inputData.value.split("-"));

        console.log(this._inputData.value.replace(/-/g, ','));
        
        let data = this._inputData.value.split("-")
        console.log( Number(data[1]) - 1 );
        

        
        let negociacao = new Negociacao(
            new Date(this._inputData.value.split("-")), 
            this._inputQuantidade.value, 
            this._inputValor.value)
        
        console.log(negociacao.data)
        console.log(negociacao.valor)
        console.log(negociacao.quantidade)

    }

}