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
        
        // Poderia ter feio assim
        console.log(this._inputData.value.split("-"));

        // Ou assim
        console.log(this._inputData.value.replace(/-/g, ','));
        
        // let data = this._inputData.value.split("-")
        // console.log( Number(data[1]) - 1 );
        
        // Resolvendo a criação do elemento Date com o paradigma funcional
        // Usando o spread operator, (reticências) (...)
        // O spread, faz um casamento entre as posições do array com 
        // os paramêtros do objeto.
        // Operador de espelhamento.
        
        // Alguns links:
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
        // https://udgwebdev.com/usando-spread-operator-do-es6/
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        let data = new Date(...
            this._inputData.value
            .split("-")
            // O código foi simplificado ainda mais com Arrow Functions () => {}
            .map( (item, index) => {
                // Se for o indice 2, o mês, subtraia um
                // if (index == 1) {
                //     return item - 1;   
                // }
                // // Se não só retorne o valor.
                // return item;

                // Explicação disso:
                // 0 % 2 = 0, 1 % 2 = 1, 2 % 2 = 0
                // Sempre que estiver na posição do mês irá 
                // subtrair 1.

                return item - index % 2;
            })
        );

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value, 
            this._inputValor.value)
        
        console.log(negociacao.data)
        console.log(negociacao.valor)
        console.log(negociacao.quantidade)

    }

}