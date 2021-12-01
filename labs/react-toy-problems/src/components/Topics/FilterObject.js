import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(){
    super()
    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.filterEmployees.bind(this)
  }
  onChange(value) {
    this.setState({ userInput: value });
  }
  filterEmployees(property) {
    let employees = this.state.employees;
    let filteredEmployees = [];
    
    for ( let employee of employees) {
      if ( employee.hasOwnProperty(property) ) {
        filteredEmployees.push(employee);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.onChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )

  }
};

export default FilterObject;