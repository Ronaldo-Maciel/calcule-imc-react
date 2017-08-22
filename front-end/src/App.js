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
        this.state = { name: '', height: 0.00, weight: 0, list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.updateList()
  }
  updateList(name = '', height = 0.00, weight = 0) {
      axios.get(`${URL}?sort=-createdAt`) //pega a lista atual e ordena de forma decrescente
      .then(resp => this.setState({...this.state, name, height, weight, list: resp.data}))
  }
  handleChange(e) {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }
  totalImc() {
    return Math.abs(this.state.weight / (this.state.height * this.state.height)).toFixed(2);
 }
  handleAdd() {
      
      const name = this.state.name
      const height = this.state.height
      const weight = this.state.weight
      console.log(this.totalImc())
      axios.post(URL, { name, height, weight })
        .then(resp => this.updateList())
  }
  render() {
    return (
      <div>
        <ImcForm 
          name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          handleChange={this.handleChange} 
          handleAdd={this.handleAdd} />
        <TodoList 
          list={this.state.list} />
      </div>
    );
  }
}

export default App;
