import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      evenArray:[],oddArray:[],userInput:``
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this)
  }
  onChange(event){
    this.setState({userInput:event.target.value}) 
  }
  onClick(){
    let {userInput, oddArray, evenArray} = this.state
    userInput.split(`,`).map(num=>+num%2===0?evenArray.push(num):oddArray.push(num))
    this.setState({oddArray:[...oddArray],evenArray:[...evenArray]})
  }
  render (){
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input onChange={this.onChange} className='inputLine'></input>
        <button onClick={this.onClick} className='confirmationButton'></button>
        <span className='resultsBox'>{`${this.state.oddArray}`}</span>
        <span className='resultsBox'>{`${this.state.evenArray}`}</span>
      </div>
    );
  }
};

export default EvenAndOdd;