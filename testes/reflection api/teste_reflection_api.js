let objeto1 =  {
    nome:"Bob"
}

let objeto2 = { 
    nome:"Leo"
}

function exibirNome() {
    alert(this.nome)
}

function exibirNome2(prefixo, sufixo) {
    alert(prefixo + this.nome + sufixo)
}


Reflect.apply(exibeNome, objeto1, []); // exibe 'Bob'

Reflect.apply(exibeNome, objeto2, []); // exibe 'Leo'

Reflect.apply(exibeNom2, objeto1, ['(', ')']); // exibe '(Bob)'