import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
    state = {
        novaTarefa: '',
    };

    handleChange = (evento) => {
        this.setState({
            novaTarefa: evento.target.value,
        });
    };

    render() {
        // eslint-disable-next-line no-unused-vars
        const { novaTarefa } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form action="#" className="form">
                    <input onChange={this.handleChange} type="text" value={novaTarefa} />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
            </div>
        );
    }
}
