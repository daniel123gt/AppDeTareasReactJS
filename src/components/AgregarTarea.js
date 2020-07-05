import React, { Component } from 'react';
import logo from '../img/logo.png'

class AgregarTarea extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTarea(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'Baja'
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="card border-dark text-white bg-dark">
                <img src={logo} alt="" className="card-img-top text-center mt-2" style={{width: 100, margin: 'auto'}} />
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Titulo de la tarea"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Responsable de la tarea"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Descripción"
                        />
                    </div>
                    <div className="form-group">
                        <p>Seleccione una prioridad</p>
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Cargar Tarea
          </button>
                </form>
            </div>
        )
    }
}

export default AgregarTarea;
