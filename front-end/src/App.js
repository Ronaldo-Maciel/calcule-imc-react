import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ImcForm from './imc/imcForm'
import TodoList from './imc/imcList'

const URL = 'http://localhost:3003/api/imcs'

class App extends Component {
  constructor(props) {
        super(props)
        this.state = { name: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.updateList()
  }
  updateList(name = '') {
      axios.get(`${URL}?sort=-createdAt`) //pega a lista atual e ordena de forma decrescente
      .then(resp => this.setState({...this.state, name, list: resp.data}))
  }
  handleChange(e) {
    this.setState({...this.state, name: e.target.value})
  }
  handleAdd() {
      const name = this.state.name
      axios.post(URL, { name })
        .then(resp => this.updateList())
  }
  render() {
    return (
      <div>
        <ImcForm name={this.state.name}
          handleChange={this.handleChange} 
          handleAdd={this.handleAdd} />
        <TodoList 
          list={this.state.list} />
      </div>
    );
  }
}

export default App;
