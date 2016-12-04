// import "babel-polyfill";
import React from 'react';
import ReactDom from 'react-dom';

import { getEmployees } from './CardsService';
import Cards from './Cards';


class App extends React.Component {
  constructor() {
    super();

    this.state = {employees : []};
  }


  componentWillMount(){
          getEmployees()
              .then(response => {
                  this.setState({employees: response});
              })
              .catch(err => {
                  console.log('error getting employees data!', err);
              })
  }
  
  render() {
  	const id = Date.now();

    let employees = this.state.employees;
    // let employees = [];

    if (employees.length == 0){
      return (
            <div className="loading">
              Loading...
            </div>
          
      )
    }
    else {
          return (
            <Cards employees={this.state.employees}></Cards>
          )      
    }
  } 
}



export default App;