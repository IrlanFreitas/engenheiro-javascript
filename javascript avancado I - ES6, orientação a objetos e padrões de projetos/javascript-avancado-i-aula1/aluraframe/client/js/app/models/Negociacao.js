class Negociacao {

    // constructor() {
    //     this.data = new Date();
    //     this.quantidade = 1;
    //     this.valor = 0;
    // }

    // O construtor define os atributos da classe

    constructor(data, quantidade, valor){
        //Não confiando no valor passado
        //e criando uma nova referência
        this._data = new Date( data.getTime() )
        this._quantidade = quantidade
        this._valor = valor

        //Com esse método o objeto se torna um Objeto Imutável.
        //shallow - significa que esse congelamento são só para 
        //os atributos não objetos, caso seja feito, 
        //negociacao.date.setDate() - irá funcionar.
        Object.freeze(this)
    }

    //os objetos acessarão com o .volume, como se 
    //fosse um atributo, porem. por debaixo dos 
    //panos é chamada como função
    get volume() {
        return this._quantidade * this._valor
    }

    get data(){
        //Programação defensiva, devolvendo uma nova referência
        //da data, para que mesmo que seja acessada não 
        //seja a referencia original.
        return new Date(this._data.getTime())
    }

    get quantidade(){
        return this._quantidade
    }

    get calor(){
        return this._valor
    }

}