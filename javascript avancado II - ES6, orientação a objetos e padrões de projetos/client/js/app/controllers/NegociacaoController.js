class NegociacaoController {

    constructor() {
        // Baseado em high order functions
        // Em vez de utilizar document.querySelector, event.target.querySelector()
        // Usando o método bind para que não seja perdida a referência ao documento e
        // que assim funcione

        // Os elementos foram trazidos para cá, para que não seja
        // necessário percorrer o DOM diversas vezes

        let $ = document.querySelector.bind( document )
        this._inputQuantidade = $("#quantidade")
        this._inputData = $("#data")
        this._inputValor = $("#valor")

        let self = this

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {

                if(['adiciona','esvazia'].includes(prop) && 
                    typeof(target[prop]) == typeof(Function)) {
                    
                    return function() {
                        console.log(`Interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments)
                        self._negociacoesView.update(target)

                    }
                }

                return Reflect.get(target, prop, receiver)
            }
        })
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))

    }

    adiciona(event) {
        // Cancelando o submit que recarrega a página
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        // this._listaNegociacoes.negociacoes.push(this._criaNegociacao())
        this._mensagem.texto = "Negociação adicionada com sucesso!"
        this._mensagemView.update(this._mensagem)
        
        
        this._limpaFormulario()
        
        // this._listaNegociacoes.negociacoes.length = 0 - Isso aqui irá zerar o array
        // this._listaNegociacoes.negociacoes.push() - Isso aqui adicionar itens no array
        console.log(this._listaNegociacoes.negociacoes);
        
    }

    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value)
    }

    _limpaFormulario() {
        this._inputQuantidade.value = 1;
        this._inputData.value = '';
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}