// import "babel-polyfill";
import React from 'react';
import ReactDom from 'react-dom';

import { getEmployees } from './CardsService';
import Cards from './Cards';


class App extends React.Component {
  constructor() {
    super();

    this.state = {employees : []};
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

    return (
      <Cards key={id} employees={this.state.employees}/>
    );
  } 
}



export default App;