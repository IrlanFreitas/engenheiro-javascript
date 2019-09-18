class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada")
    }

    static dataParaTexto(data) {

        // Usando Template String
        // Alguns links:

        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings
        // https://pt.stackoverflow.com/questions/78750/template-string-em-javascript

        return `${data.getDate()} / ${(data.getMonth() + 1)} / ${data.getFullYear()}`
    }

    static textoParaData(texto) {

        // Usando o FAIL FAST
        //Validando a string com RegEx

        // cria a expressão regular. Poderíamos ter usado 
        // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
        // \D é qualquer coisa não dígito
        // \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres
        // \d é qualquer dígito.
        // toda expressão regular possui o método test 
        // que recebe o alvo do teste, retornando true
        // se passou, e false se falhou

        // O ˆ indica "começando com " e o $ "terminando com".

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto) ) {
            throw new Error("A data não está no padrão aaaa-mm-dd")
        }


        // Poderia ter feio assim
        // console.log(texto.value.split("-"));

        // Ou assim
        // console.log(texto.value.replace(/-/g, ','));

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

        return new Date(...texto.split("-")
            // O código foi simplificado ainda mais com Arrow Functions () => {}
            .map((item, index) => {
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
    }

}