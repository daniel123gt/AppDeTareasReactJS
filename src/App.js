import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { tareas } from './tarea.json';
import AgregarTarea from './components/AgregarTarea'
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tareas: tareas
    };

    this.handleAddTarea = this.handleAddTarea.bind(this);

  }

  handleAddTarea(tarea) {

    this.setState({
      tareas: [...this.state.tareas, tarea]
    })

  }

  removeTarea(index) {
    if (window.confirm('¿Estás seguro que deseas eliminar esta tarea?')) {
      this.setState({
        tareas: this.state.tareas.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {

    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-4">
          <div className="card border-dark text-white bg-dark mt-4">
            <div className="card-header">

              <h3>{tarea.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.priority}
              </span>

            </div>

            <div className="card-body">

              <p>{tarea.description}</p>
              <p><mark>{tarea.responsible}</mark></p>

            </div>

            <div className="card-footer">

              <button className="btn btn-danger"
                onClick={this.removeTarea.bind(this, i)}
              >
                Eliminar

              </button>

            </div>

          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark" >
          <a href="" className="text-white">
            Gestor de Tareas CarDGT
            </a>

          <span className="badge badge-pill badge-light">

            {this.state.tareas.length}

          </span>

        </nav >

        <div className="container mb-4">

          <div className="row mt-4">

            <div className="col-md-3">

              <img></img>

              <AgregarTarea onAddTarea={this.handleAddTarea} />

            </div>

            <div className="col-md-9">

              <div className="row">

                {tareas}

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
