export default class ArrayDeNotas{
    constructor() {
        this.notas = [];
        this._inscritos =[];
    }

    criarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(index){
        this.notas.splice(index, 1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto  = texto;
        this.categoria = categoria;
    }
}