class Conta {

    constructor() {
        this._saldo = 0.0
    }

    atualiza(taxa) {
        throw new Error("Método deposita ainda não foi implementado") 
    }

    get saldo(){
        return this._saldo
    }
}