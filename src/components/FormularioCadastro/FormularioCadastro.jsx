import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)} className="form-cadastro">
        <select 
          onChange={this._handleMudancaCategoria.bind(this)} 
          className="form-cadastro_input">
        <option>Sem categoria</option>
          {this.props.categorias.categorias.map((categoria, index) => {
              return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          className="form-cadastro-input"
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows="15"
          className="form-cadastro-input"
          placeholder="Escreva sua nota..."
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button type="submit" className="form-cadastro-input form-cadastro-submit" >
          Criar nota
        </button>
      </form>
    );
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }
}

export default FormularioCadastro;
