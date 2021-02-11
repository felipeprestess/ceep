import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

/**
 * Não é necessário implementar o construtor porque já é implícito
 *  para o React com o parâmetro de props passados para a classe pai
 */

 constructor(){
    super();
    this.state = {notas:[]}
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(notas){
    this.setState({...this.state,notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, indice) => {
          return (
            <li className="lista-notas_item" key={indice}>
              <CardNota
                indice={indice} 
                titulo={nota.titulo} 
                texto={nota.texto} 
                deletarNota={this.props.deletarNota}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
