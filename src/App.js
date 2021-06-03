
import React from 'react'
import './App.css';
import * as math from 'mathjs'
/* Importar os comeponentes*/
import Button from './Components/Button';
import Input from './Components/Input';
import ClearBtn from './Components/ClearButton'


  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        input:""
      }
    }

    /*function*/

    addToInput = val =>
      this.setState({input:this.state.input + val});
    
    handleEqual = () => {
      this.setState({input: math.evaluate(this.state.input)})
    }

    

    render(){
  
    return (
      <div className="App">
        <div className="Calculadora">
          <Input input={this.state.input}></Input>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <ClearBtn handleClear={() =>{this.setState({input:""})}}>C</ClearBtn>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={()=> this.handleEqual()}>=</Button>
        </div>
      </div>
    </div>
  );
    }

  } 


export default App;
