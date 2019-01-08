class NegociacoesView {


    constructor(elemento) {
        this._elemento = elemento
    }

    template(modelo) {

        // Usando o template string!

        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${modelo.negociacoes.map(negociacao => 
                `
                    <tr>
                        <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `
            ).join('')}
        </tbody>
        
        <tfoot>
            <td colspan="3"></td>
            // Usando funções imediatas iife
            // links:
            // https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife

            // Usando o reduce
            // 
            <td>${ modelo.negociacoes.reduce( (total, negociacao) => total + negociacao.volume, 0.0) }</td>
        </tfoot>
        </table>
        `

    }

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo)
    }

}
