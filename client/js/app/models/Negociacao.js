class Negociacao{

    constructor(){

        this._data = new date();
        this._quantidade = 1;
        this._valor = 0.0;
    }
    get volume(){
        return this._quantidade * this._valor;   
    }
    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}