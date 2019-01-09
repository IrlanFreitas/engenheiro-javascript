class NegociacoesView extends View{

    constructor(elemento) {
        super(elemento)
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
            <!-- 
                Usando funções imediatas iife
                links:
                https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife

                Usando o reduce:
                links:
                https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981
            --> 
            <td>${ modelo.negociacoes.reduce( (total, negociacao) => total + negociacao.volume, 0.0) }</td>
        </tfoot>
        </table>
        `

    }

}
